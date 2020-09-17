<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button class="btn btn-danger" @click="resetName">Reset name</button>
        <button class="btn btn-danger" @click="resetFn()">Reset name with callback() or without custom event</button>
    </div>
</template>

<script>
    import { eventBus } from "../main";

    export default {
        // Una forma de establecer props
        // ---------
        /*props: [
            'myName'
        ],*/
        // ---------
        // 2da forma
        /*props: {
            myName: String
        },*/
        // ---------
        // 3ra forma
        props: {
            myName: {
                type: String
            },
            resetFn: Function,
            userAge: Number
        },
        // ---------
        // 4ta
        /*props: {
            myName: {
                type: Object,
                default: function () {
                    return {
                        name: 'Max'
                    }
                }
            }
        },*/
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Agustin';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
               this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
