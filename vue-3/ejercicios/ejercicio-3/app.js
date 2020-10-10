const vm = Vue.createApp({
  data() {
    return {
      value: 0,
      time: 5000,
    };
  },
  methods: {
    add(num) {
      this.value += num;
      console.log('Method', this.value);
    },
  },
  computed: {
    result: function () {
      console.log("Computed", this.value);
      return this.value !== 37 ? "Not ther yet" : "Too much!";
    },
  },
  watch: {
    result: function () {
      const that = this;
      setTimeout(function () {
        that.value = 0;
      }, this.time);
    },
  },
});

vm.mount("#assignment");
