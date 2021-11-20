const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learning Vue",
      //   courseGoalB: "<h2> Master Vue </h2>",
      courseGoalB: "Master Vue",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    changeGoal() {
      this.courseGoal = "Hello World";
      return this.courseGoal;
    },
    defaultGoal() {
      this.courseGoal = "Learning Vue";
      return this.courseGoal;
    },
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
