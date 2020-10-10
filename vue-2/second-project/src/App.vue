<template>
    <div class="container">
        <app-quote-header :quotesCount="this.quotes.length" :maxQuotes="maxQuotes"></app-quote-header>
        <app-new-quote @newQuoteCreated="newQuote(quote = $event)"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote(indexQuote = $event)"></app-quote-grid>
        <div class="row mt-2">
            <div class="col-sm-12">
                <div class="alert alert-info text-center" role="alert">
                    <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Click on an quote to remove it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteHeader from "./components/QuoteHeader.vue";
    import NewQuote from "./components/NewQuote.vue";
    import QuoteGrid from "./components/QuoteGrid.vue";

    export default {
        data: function () {
            return {
                maxQuotes: 10,
                quotes: ['My first Quote']
            };
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length !== this.maxQuotes) {
                    this.quotes.push(quote);
                } else {
                    alert('You\'ve reached the limit for adding appointments. Please delete one if you want to add another.')
                }
            },
            deleteQuote(indexQuote) {
                this.quotes.splice(indexQuote, 1);
            }
        },
        components: {
            appQuoteHeader: QuoteHeader,
            appNewQuote: NewQuote,
            appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>
