const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      inputName: "",
    };
  },
  methods: {
    addCounter() {
      return this.counter++;
    },
    reduceCounter() {
      return this.counter--;
    },
    setName(event) {
      this.inputName = event.target.value;
      return this.inputName;
    },
    submitForm(event) {
      // event.preventDefault();
      alert("Submitted");
    },
  },
});

app.mount("#events");
