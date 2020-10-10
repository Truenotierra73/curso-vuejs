const vm = Vue.createApp({
    data() {
        return {
            name: 'Agustín',
            age: 28,
            sourceImg: 'https://victorroblesweb.es/wp-content/uploads/2017/03/vuejs2-victorroblesweb.jpg'
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    }
});

vm.mount('#assignment');