const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 450,
      warriorHealth: 100,
      currentRound: 0,
      isSurrender: false,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    warriorHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.warriorHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },

  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        this.monsterHealth = 0;
      }
      return { width: (this.monsterHealth * 10) / 45 + "%" };
    },
    playerBarStyle() {
      if (this.warriorHealth < 0) {
        this.warriorHealth = 0;
      }
      return { width: this.warriorHealth + "%" };
    },
    currentRoundTime() {
      return this.currentRound % 3 != 0 || this.currentRound == 0;
    },
    disableHeal() {
      return this.warriorHealth === 100;
    },
  },

  methods: {
    attackMonster() {
      this.currentRound++;
      const playerAttack = Math.floor(Math.random() * (20 - 15)) + 15;
      this.monsterHealth -= playerAttack;
      this.addLogMessage("Player", "Attack", playerAttack);
      this.attackPlayer();
    },
    attackPlayer() {
      const monsterAttack = Math.floor(Math.random() * (8 - 2)) + 2;
      this.warriorHealth -= monsterAttack;
      this.addLogMessage("Monster", "Attack", monsterAttack);
    },
    specialAttack() {
      this.currentRound = 0;
      const playerAttack = Math.floor(Math.random() * (30 - 20)) + 20;
      this.monsterHealth -= playerAttack;
      this.addLogMessage("Player", "Special Attack", playerAttack);
      this.attackPlayer();
    },
    healUser() {
      this.currentRound++;
      const healPlayer = Math.floor(Math.random() * (15 - 10)) + 10;
      if (this.warriorHealth + healPlayer > 100) {
        this.warriorHealth = 100;
      } else this.warriorHealth += healPlayer;
      this.addLogMessage("Player", "Heaş", healPlayer);
      this.attackPlayer();
    },
    playerSurrender() {
      this.isSurrender = true;
      this.warriorHealth = 0;
      this.addLogMessage("Player", "Surrender", "");
    },
    startNewGame() {
      this.currentRound = 0;
      this.warriorHealth = 100;
      this.monsterHealth = 450;
      this.winner = null;
      this.isSurrender = false;
      this.logMessages = [];
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
