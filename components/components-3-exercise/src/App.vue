<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <br>
                <button class="btn btn-primary m-2" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button m-2 class="btn btn-success m-2" @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button m-2 class="btn btn-danger m-2" @click="selectedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <!--<app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red>-->
                <component :is="selectedComponent">
                    <p>My content.</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
          return {
              selectedComponent: 'appRed'
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
