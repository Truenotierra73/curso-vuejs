<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>vue-resource</h1>
                <h2>POST</h2>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input id="username" class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit()">Submit</button>
                <hr>
                <h2>GET</h2>
                <input class="form-control" type="text" v-model="node">
                <br><br>
                <button class="btn btn-primary" @click="fetchData()">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users" :key="user.username">
                        {{ user.username }} - {{ user.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                //     .then(res => {
                //         this.user.username = '';
                //         this.user.email = '';
                //         console.log(res);
                //     }, err => {
                //         console.log(err);
                //     });
                // this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            },
            fetchData() {
                // this.$http.get('data.json')
                //     .then(res => {
                //         return res.json();
                //     }, err => {
                //         console.log(err);
                //     }).then(data => {
                //         let resultArray = [];
                //         for (const key in data) {
                //             if (data.hasOwnProperty(key)) {
                //                 resultArray.push(data[key]);
                //             }
                //         }
                //         this.users = resultArray;
                //     });
                this.resource.getData({ node: this.node })
                    .then(res => {
                        return res.json();
                    }, err => {
                        console.log(err);
                    }).then(data => {
                        let resultArray = [];
                        for (const key in data) {
                            if (data.hasOwnProperty(key)) {
                                resultArray.push(data[key]);
                            }
                        }
                        this.users = resultArray;
                    });
            }
        },
        created() {
            const customActions = {
                saveAlt: { method: 'POST', url: 'alternative.json' },
                getData: { method: 'GET', }
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
