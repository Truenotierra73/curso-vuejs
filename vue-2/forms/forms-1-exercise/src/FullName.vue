<template>
    <div>
        <div class="form-group">
            <label for="firstName">First name</label>
            <input class="form-control" id="firstName" type="text" placeholder="First name" :value="firstName" @input="changeName(true, $event)">
        </div>
        <div class="form-group">
            <label for="lastName">Last name</label>
            <input class="form-control" id="lastName" type="text" placeholder="Last name" :value="lastName" @input="changeName(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            changeName(isFirstName, e) {
                let name = '';
                if (isFirstName) {
                    name = e.target.value + ' ' + this.lastName;
                } else {
                    name = this.firstName + ' ' + e.target.value;
                }
                this.value = name;
                this.$emit('input', this.value);
            }
        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];
            }
        }
    }
</script>

<style scoped>

</style>