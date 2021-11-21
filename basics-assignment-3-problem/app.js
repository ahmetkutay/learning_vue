const app = Vue.createApp({
  data() {
    return {
      number: 0,
      tooMuch: "Too much!",
      notThere: "Not there yet",
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        return (that.number = 0);
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number > 37) {
        return this.tooMuch;
      } else if (this.number == 37) {
        return this.number;
      } else return this.notThere;
    },
  },
  methods: {
    add(num) {
      this.number = this.number + num;
      return this.number;
    },
  },
});

app.mount("#assignment");
