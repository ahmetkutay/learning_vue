const app = Vue.createApp({
  data() {
    return {
      alertText: "Hello There",
      keydownEventInput: "",
      enterEventType: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertText);
    },
    keyDownInput(event) {
      this.keydownEventInput = event.target.value;
      return this.keydownEventInput;
    },
    enterInput(event) {
      this.enterEventType = event.target.value;
      return this.enterEventType;
    },
  },
});

app.mount("#assignment");
