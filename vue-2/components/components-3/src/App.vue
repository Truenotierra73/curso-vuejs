<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <button type="button" class="btn btn-primary" @click="selectedComponent = 'appQuote'">Quote</button>
                <button type="button" class="btn btn-danger" @click="selectedComponent = 'appAuthor'">Author</button>
                <button type="button" class="btn btn-warning" @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p slot="content" v-if="selectedComponent === 'appQuote'">Wonderful Quote!</p>
                    </component>
                </keep-alive>
               <!--<app-quote>
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <p slot="content">A wonderful Quote!</p>
               </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from "./components/Author.vue";
    import New from './components/New.vue'

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
