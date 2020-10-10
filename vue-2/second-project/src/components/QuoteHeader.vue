<template>
    <div class="row">
        <div class="col-md-12">
            <h1>The Quotes</h1>
            <div class="progress">
                <div class="progress-bar progress-bar-striped" role="progressbar" :style="{width: ((quotesCount/maxQuotes) * 100) + '%'}">
                    {{ quotesCount }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quotesCount', 'maxQuotes']
    }
</script>

<style scoped>

</style>