<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            // increment() {
            //     // this.$emit('updated', 1);
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     // this.$emit('updated', -1);
            //     this.$store.state.counter--;
            // }
            ...mapActions([
                'increment',
                'decrement'
            ])
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ])
        }
    }
</script>