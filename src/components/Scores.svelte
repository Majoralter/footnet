<section id="scores">
    <h2 class="heading">
        Matches
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

            &::after{
                content: "[Live]";
                font-size: 1rem;
                color: #16C172;
            }
        }

        .scores{
            @include flex(column, center,  flex-start, 1em);
            padding: 2vw;
            width: fit-content;
        }
    }
</style>