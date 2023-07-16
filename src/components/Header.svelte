<script>
    let viewPortWidth = 0

    window.addEventListener('resize', () =>{
        viewPortWidth = window.innerWidth
    })
</script>

<header>
    <nav>
        <a href="index.html" class="logo">Footnet</a>

        <ul>
            <li><a href="index.html">Latest scores</a></li>
            <li><a href="index.html">Compare Stats</a></li>
            <li><a href="index.html">API</a></li>
        </ul>
    </nav>
</header>

<style lang="scss">
    header{
        padding: 3vw 5vw;
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
            nav{
                flex-wrap: wrap;
                align-items: flex-start;
                gap: 2rem;

                ul{
                    flex-wrap: wrap;
                    height: fit-content;
                    justify-content: flex-start;
                    gap: 2rem;
                    padding-top: .3rem;
                }
            }
        }
    }
</style>