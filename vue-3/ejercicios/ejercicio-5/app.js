const vm = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            visible: true,
            buttonText: ''
        };
    },
    methods: {
        addTask() {
            if (this.task !== '') {
                this.tasks.push(this.task);
                this.task = '';
            }
        },
        showList() {
            this.visible = !this.visible;
        }
    },
    computed: {
        updateButtonCaption() {
            return this.visible ? this.buttonText = 'Hide List' : this.buttonText = 'Show List';
        }
    }
});

vm.mount('#assignment');