const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
    // name(value) {
    //   if (value == "") {
    //     return (this.fullName = "");
    //   }
    //   this.fullName = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (value == "") {
    //     return (this.fullName = "");
    //   }
    //   this.fullName = this.name + " " + value;
    // },
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullName() {
      if (this.name == "") {
        return (this.name = "");
      }
      return this.name + " " + "Karacair";
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
      return this.name, this.lastName;
    },
  },
});

app.mount("#events");
