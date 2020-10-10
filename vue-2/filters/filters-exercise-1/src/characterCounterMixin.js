export const characterCounterMixin = {
    data() {
        return {
            text: 'New Test'
        };
    },
    computed: {
        characterCounterMixin() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}