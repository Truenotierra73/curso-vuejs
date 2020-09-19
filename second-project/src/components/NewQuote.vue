<template>
    <div class="row justify-content-center">
        <form>
            <div class="col col-xl-12 form-group">
                <label for="newQuote">Quote</label>
                <textarea id="newQuote" class="form-control" rows="3" placeholder="Write a quote here..." v-model="quote"></textarea>
            </div>
            <div class="col col-xl-12 form-group">
                <button type="button" class="btn btn-primary" @click.prevent="createQuote">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                quote: ''
            };
        },
        methods: {
            createQuote() {
                if (this.quote !== '') {
                    this.$emit('newQuoteCreated', this.quote);
                    this.quote = '';
                }
            }
        }
    }
</script>

<style scoped>
    textarea {
        resize: none;
    }

    button {
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
</style>