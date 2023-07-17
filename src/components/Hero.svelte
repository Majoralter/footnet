<script>
    let newsHeadline = "",
        linkUrl = "",
        imagePath = ""

    window.addEventListener('load', () =>{
        const url = 'https://livescore6.p.rapidapi.com/news/v2/list';
        const options = {
	        method: 'GET',
	        headers: {
		    'X-RapidAPI-Key': '17ef089635msh308d7b3ccbd5643p17f528jsn3b1ae12b6853',
		    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch(url,options).then(response => response.json()).then(data => {
    let randomIndex = Math.floor(Math.random() * 12)

    imagePath = data.homepageArticles[0].articles[`${randomIndex}`].mainMedia.gallery.url
    newsHeadline = data.homepageArticles[0].articles[`${randomIndex}`].title
    linkUrl = data.homepageArticles[0].articles[`${randomIndex}`].url
}).catch(err => console.log(err))
})
</script>

<main>
    <div class="left--main">
        <h1>
            Latest News:
        </h1>
        
        {#if newsHeadline === ""}
        <div class="loader-text">Fetching latest news...</div>

        {:else}
        <p>{newsHeadline}</p>
      {/if}

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
            height: 350px;
            width: 500px;
            border-radius: 7px;
            animation: spin .9s ease-in-out infinite alternate;

            @-webkit-keyframes spin {
                0% {
                background-color: #625500;
              }
              100% {
                background-color: #0e0e0e;
              }
            }
            @keyframes spin {
              0% {
                background-color: #625500;
              }
              100% {
                background-color: #0e0e0e;
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

            .loader-text{
                color: #f2f2f2;
                font-size: 2.5rem;
                animation: blink .7s ease-in-out infinite alternate;


                @keyframes blink{
                    0%{
                        color: #f2f2f2;
                    }

                    100%{
                        color: #0e0e0e;
                    }
                }
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
                width: 90vw;
                height: 250px;
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