<script>
    let isLoading = false;

    const handleClick = () =>{
        isLoading = true
    }
</script>

<section id="player-stats">
    <h2>
        Player Stats
    </h2>
    <form>
        <input type="text" placeholder="Enter full player name" class="player-name">
        <button class="search-btn" type="button" on:click={handleClick}>Search</button>
    </form>

    <img src="" alt="" class="img">

    <div class="player-stats">
        {#if isLoading}
            <div class="loader"></div>
        {/if}
    </div>
</section>

<style lang="scss">
    section{
        margin: 8vw;
        @include flex(column, center, center, 2em);

        h2{
            color: #f2f2f2;
            font-size: 2.25rem;
        }

        img{
            border-radius: 10px;
        }

        form{
           background-color: #141414;
           padding: 2rem;
           border-radius: 10px;
           @include flex(row, center, center, 2vw);
           flex-wrap: wrap;

           input{
                padding: 12px 24px;
                border: 1px  solid #535353;
                background-color: #f2f2f2;
                border-radius: 7px;
                

                &:focus{
                    border: none;
                    outline: solid 1px #F1D302;
                }
           }

           button{
                padding: 12px 24px;
                border-radius: 7px;
                border: none;
                font-weight: bold;
                color: #141414;
                background-color: #F1D302;
                cursor: pointer;
           }
        }

        .player-stats{
              .loader {
                border: 8px solid #202020;
                border-radius: 50%;
                border-top: 8px solid #F1D302;
                border-bottom: 8px solid #F1D302;
                width: 80px;
                height: 80px;
                -webkit-animation: spin 2s linear infinite;
                animation: spin 2s linear infinite;
              }
          
              @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
              }

              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            }
    }
</style>