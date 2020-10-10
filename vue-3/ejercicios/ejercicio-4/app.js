const vm = Vue.createApp({
    data() {
        return {
            style: '',
            show: true,
            backgroundColorStyle: ''
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        }
    },
    computed: {
        // userStyle() {
        //     if (this.style == 'user1') {
        //         return this.style;
        //     } else if (this.style == 'user2') {
        //         return this.style;
        //     }
        // },
        // isVisible() {
        //     if (this.show) {
        //         return 'visible';
        //     } else {
        //         return 'hidden';
        //     }
        // }
        classes() {
            return {
                user1: this.style === 'user1',
                user2: this.style === 'user2',
                visible: this.show,
                hidden: !this.show
            };
        }
    }
});

vm.mount('#assignment');