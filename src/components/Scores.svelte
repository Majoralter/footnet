

<section>
    <h2 class="heading">
        Live scores
    </h2>

    <div class="scores">
    </div>
</section>


<style lang="scss">
    section{
        @include flex(column, center, center, 1rem);
        margin-top: 5vw;


        .heading{
            font-size: 1.25rem;
            color: #F1D302;
        }

        .scores{
            @include flex(column, center,  flex-start, 1em);
            padding: 2vw;
            width: fit-content;
        }
    }
</style>