<template>
    <div>
        <h1>Filters & Mixins Component</h1>
        <label for="filterText2">Search</label>
        <input id="filterText2" class="form-control" type="text" v-model="filterText" placeholder="Type a fruit...">
        <br>
        <ul>
            <li :key="fruit" v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        created() {
            console.log('Inside List Created Hook');
        }
    }
</script>

<style>

</style>