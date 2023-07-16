

<section id="scores">
    <h2 class="heading">
        Matches (live)
    </h2>

    <div class="scores">
    </div>
</section>


<style lang="scss">
    section{
        @include flex(column, center, center, .5rem);
        margin-top: 5rem;


        .heading{
            font-size: 2.25rem;
            color: #fff;
        }

        .scores{
            @include flex(column, center,  flex-start, 1em);
            padding: 2vw;
            width: fit-content;
        }
    }
</style>