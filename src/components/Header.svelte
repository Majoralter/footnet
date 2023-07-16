<script>
    let viewPortWidth = 0,
        active = false

    window.addEventListener('resize', () =>{
        viewPortWidth = window.innerWidth
    })

    const handleClick = () =>{
        active = !active

        console.log(active)
    }
</script>

<header>
    <nav>
        <a href="index.html" class="logo">Footnet</a>

        <ul class:active={active}>
            <li><a href="#scores" on:click={handleClick}>Latest scores</a></li>
            <li><a href="index.html" on:click={handleClick}>Compare Stats</a></li>
            <li><a href="index.html" on:click={handleClick}>API</a></li>
        </ul>
    </nav>

    {#if viewPortWidth <= 600}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="menu" on:click={handleClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    {/if}
</header>

<style lang="scss">
    header{
        padding: 3vw 5vw;
        position: relative;

        .menu{
            position: absolute;
            height: 30px;
            width: 30px;
            top: 5vw;
            right: 5vw;
            display: flex;
            flex-direction: column;
            gap: .3em;

            span{
                width: 100%;
                height: 3px;
                background-color: #F1D302;
            }
        }

        nav{
            @include flex(row,center,space-between,0);

            .logo{
                color: #F1D302;
                font-size: 1.5rem;
                font-weight: bold;
                text-transform: uppercase;
            }

            ul{
                @include flex(row,center,center,1rem);
                transition: all .3s ease-in-out;

               &.active{
                        transform: translateX(0);
                    }

                a{
                    font-size: 1rem;
                    font-weight: bold;
                }

                li:first-of-type{
                    a{
                        color: #F1D302;
                    }
                }

                li:nth-child(2){
                    a{
                        border: solid 1.5px #F1D302;
                        padding: 12px 24px;
                        border-radius: 7px;
                        color: #F1D302;
                    }
                }

                li:last-of-type{
                    a{
                        padding: 12px 24px;
                        border-radius: 7px;
                        color: #0e0e0e;
                        background-color: #F1D302;
                    }
                }
            }
        }
    }

    @media (max-width: 600px){
        header{
            padding: 5vw;
            nav{
                ul{
                    flex-direction: column;
                    height: 15rem;
                    gap: 2rem;
                    padding: 1rem;
                    background-color: #000;
                    border-radius: 7px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    transform: translateX(100vw);
                }
            }
        }
    }
</style>