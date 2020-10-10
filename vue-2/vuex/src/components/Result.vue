<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    // export default {
    //     // props: ['counter']
    //     computed: {
    //         counter() {
    //             return this.$store.getters.doubleCounter;
    //         }
    //     }
    // }
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';

    export default {
        // props: ['counter']
        // computed: {
        //     counter() {
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.clicksCounter;
        //     }
        // }
        computed: {
            ...mapGetters({
                counter: types.DOUBLE_COUNTER,
            })
        }
        // computed: {
        //     ...mapGetters([
        //         'doubleCounter',
        //         'clicksCounter'
        //     ])
        // }
    }
</script>