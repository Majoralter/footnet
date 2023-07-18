<section id="scores">
    <h2 class="heading">
        Matches<sup>Live</sup>
    </h2>

    <div class="scores">
    </div>
</section>


<style lang="scss">
    section{
        @include flex(column, center, center, .5rem);
        padding-top: 1rem;
        margin-top: 5rem;


        .heading{
            font-size: 2.25rem;
            color: #fff;

            sup{
                color: #16C172;
                font-size: .5em;
            }
        }

        .scores{
            @include flex(column, center,  flex-start, 1em);
            padding: 2vw;
            width: fit-content;
        }
    }
</style>