<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p><b>Text:</b> {{ 'Hello World!' }}</p>
                <p><b>Filtered text:</b> {{ 'Hello Wolrd!' | reverseText }}</p>
                <hr>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p><b>Text:</b> {{ text2 }}</p>
                <p><b>Filtered text:</b> {{ text2 | characterCounter }}</p>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p><b>Computed Property 1:</b> {{ reverseCharacters }}</p>
                <p><b>Computed Property 1:</b> {{ characterCounter }}</p>
                <hr>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ characterCounterMixin }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { characterCounterMixin } from './characterCounterMixin';

    export default {
        data() {
            return {
                text1: 'Hello World!',
                text2: 'Test'
            };
        },
        filters: {
            reverseText(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reverseCharacters() {
                return this.text2.split("").reverse().join("");
            },
            characterCounter() {
                return this.text2 + ' (' + this.text2.length + ')';
            }
        },
        mixins: [characterCounterMixin]
    }
</script>

<style>
</style>
