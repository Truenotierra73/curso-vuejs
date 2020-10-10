const vm = Vue.createApp({
    data() {
        return {
            value: ''
        }
	},
	methods: {
		showAlert() {
			alert('This is an alert!');
		},
		storeValue(event) {
			this.value = event.target.value;
		}
	}
});

vm.mount('#assignment');