const app = Vue.createApp({
  data() {
    return {
      randomClass: "",
      showParagraph: true,
    };
  },
  computed: {},
  methods: {
    showHideText() {
      return !this.showParagraph;
    },
  },
});

app.mount("#assignment");
