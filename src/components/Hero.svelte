<script>
    let newsHeadline = "",
        linkUrl = "",
        imagePath = ""

    window.addEventListener('load', () =>{
        const url = 'https://livescore6.p.rapidapi.com/news/v2/list';
        const options = {
	        method: 'GET',
	        headers: {
		    'X-RapidAPI-Key': '137d625a5emsh8df72dccc573380p166623jsnc1aa2cf506a8',
		    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch(url,options).then(response => response.json()).then(data => {
    console.log(data)

    let randomIndex = Math.floor(Math.random() * 12)

    imagePath = data.homepageArticles[0].articles[`${randomIndex}`].mainMedia.gallery.url
    newsHeadline = data.homepageArticles[0].articles[`${randomIndex}`].title
    linkUrl = data.homepageArticles[0].articles[`${randomIndex}`].url
    console.log(newsHeadline)
}).catch(err => console.log(err))
})
</script>

<main>
    <div class="left--main">
        <h1>
            Latest News:
        </h1>

        <p>
            {#if newsHeadline === ""}
              Getting latest news...

              {:else}
              {newsHeadline}
            {/if}
        </p>

        <a href="https://www.livescore.com/en/{linkUrl}">Read Article</a>
    </div>

    {#if imagePath === ""}
    <div class="loader"></div>

    {:else}
    <img src={imagePath} alt="pic of a footballer">
    {/if}
</main>

<style lang="scss">
    main{
        @include flex(row,center,space-between,.75rem);
        padding: 5vw;

        .loader {
            border: 15px solid #202020;
            border-radius: 50%;
            border-top: 15px solid #F1D302;
            border-bottom: 15px solid #F1D302;
            width: 200px;
            height: 200px;
            margin-right: 20%;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;

            @-webkit-keyframes spin {
                0% {
                  -webkit-transform: rotate(0deg);
                }
                100% {
                  -webkit-transform: rotate(360deg);
                }
            }
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
        }

        .left--main{
            @include flex(column,flex-start,flex-start,2rem);
            h1{
                color: #16C172;
                font-size: 1rem;
            }

            p{
                color: #f2f2f2;
                font-size: 2.5rem;
            }

            a{
                padding: 12px 24px;
                color: #0e0e0e;
                font-weight: bold;
                background-color: #F1D302;
                border-radius: 7px;
            }
        }

        img{
            height: 350px;
            width: auto;
            object-fit: cover;
            border-radius: 7px;
        }
    } 
    
    @media (max-width: 1280px){
        main{
            flex-direction: column;

            .loader{
                margin: 0 auto;
            }

            img{
                max-width: 100%;
                height: 100%;
                object-fit: scale-down;
                border-radius: 7px;
            }
        }
    }

    @media (max-width: 600px){
        main{
            padding-top: 4rem;
            .loader{
                width: 100px;
                height: 100px;
            }

            .left--main{
                gap: 1rem;

                p{
                    font-size: 2rem;
                }
            }
        }
    }
</style>