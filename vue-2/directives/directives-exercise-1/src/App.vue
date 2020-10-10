<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-primary" type="button" v-custom:click="clicked">Click me</button>
                <hr>
                <div :class="[{lightgreen: !active}, {lightcoral: active}]" style="height: 100px; width: 100px;"
                        v-custom:mouseenter="mouseEnter"
                        v-custom:mouseleave="mouseLeave">
                {{ active }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                active: false
            };
        },
        directives: {
            custom: {
                bind(el, binding) {
                    /*el.onclick = function () {
                        binding.value();
                    };*/
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked() {
                alert('My first message created for directive');
            },
            mouseEnter() {
                console.log('Enter');
                this.active = true;
            },
            mouseLeave() {
                console.log('Exit');
                this.active = false;
            }
        }
    }
</script>

<style>
    .lightcoral {
        background-color: lightcoral;
    }

    .lightgreen {
        background-color: lightgreen;
    }
</style>
