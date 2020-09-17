<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <h1>Signup Form</h1>
                    <hr>
                    <!-- Full Name (First Name + Last Name) -->
                    <app-full-name v-model="fullName"></app-full-name>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label>Data Store?</label>
                        <label for="yes">
                            <input
                                    type="radio"
                                    id="yes"
                                    value="Yes" v-model="dataStore"> Yes
                        </label>
                        <label for="no">
                            <input
                                    type="radio"
                                    id="no"
                                    value="No" v-model="dataStore"> No
                        </label>
                    </div>
                    <button type="button" class="btn btn-primary" @click.prevent="submitted">Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ dataStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue";

    export default {
        data() {
            return {
                fullName: 'Agu Bollati',
                email: '',
                password: '',
                dataStore: 'No',
                isSubmitted: false
            };
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
