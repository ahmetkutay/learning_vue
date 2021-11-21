const app = Vue.createApp({
  data() {
    return { tasks: [], enteredValue: "", show: true };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
      this.enteredValue = "";
    },
    showHide() {
      this.show = !this.show;
      return this.show;
    },
  },
});

app.mount("#assignment");
