<template>
    <div>
        <!-- <p>Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p> -->
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ clicksCounter }}</p>
    </div>
</template>

<script>
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
                doubleCounter: types.DOUBLE_COUNTER,
                clicksCounter: types.CLICK_COUNTER
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