const app = Vue.createApp({
  data() {
    return { goals: [], enteredValue: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
      this.enteredValue = "";
    },
  },
});

app.mount("#user-goals");
