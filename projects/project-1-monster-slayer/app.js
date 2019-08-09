const defaultPlayerHealth = 100;
const defaultMonsterHealth = 100;

const minimumPlayerDamageDealt = 2;
const maximumPlayerDamageDealt = 10;

const minimumPlayerSpecialAttackDamageDealt = 10;
const maximumPlayerSpecialAttackDamageDealt = 16;

const minimumPlayerHealDealt = 8;
const maximumPlayerHealDealt = 14;

const minimumMonsterDamageDealt = 5;
const maximumMonsterDamageDealt = 12;

new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isGameRunning: false,
    turns: [],
  },
  watch: {
    playerHealth: function() {
      if(this.playerHealth <= 0) {
        // confirm modal dialog with yes and no.
        if(confirm('you have lost! New Game?')) {
          this.startGame();
        }
        else {
          this.isGameRunning = false;
        }
      }
    },
    monsterHealth: function() {
      if(this.monsterHealth <= 0) {
        if(confirm('you won! New Game?')) {
          this.startGame();
        }
        else {
          this.isGameRunning = false;
        }
      }
    }
  },
  methods: {
    startGame: function() {
      this.isGameRunning = true;
      this.turns = [];
      this.playerHealth = defaultPlayerHealth;
      this.monsterHealth = defaultMonsterHealth;
    },
    attack: function() {
      const currentPlayerAttack = this.calculateDamage(minimumPlayerDamageDealt, maximumPlayerDamageDealt);
      this.monsterHealth -= currentPlayerAttack;

      // unshift means push to the first element, not to last
      this.turns.unshift({ isPlayer: true, text: `Player hits monster for ${currentPlayerAttack}`});

      this.monsterAttack();
    },
    specialAttack: function() {
      const currentPlayerAttack = this.calculateDamage(minimumPlayerSpecialAttackDamageDealt, maximumPlayerSpecialAttackDamageDealt);
      this.monsterHealth -= currentPlayerAttack;

      this.turns.unshift({ isPlayer: true, text: `Player hits monster with special attack for ${currentPlayerAttack}`});

      this.monsterAttack();
    },
    heal: function() {
      const currentHeal =  this.calculateDamage(minimumPlayerHealDealt, maximumPlayerHealDealt);
      this.playerHealth = this.playerHealth + currentHeal < 100 ? this.playerHealth + currentHeal : 100;

      this.turns.unshift({ isPlayer: true, text: `Player heals for ${currentHeal}`});

      this.monsterAttack();
    },
    giveUp: function() {
      this.isGameRunning = false;
    },
    monsterAttack: function() {
      const currentMonsterAttack =  this.calculateDamage(minimumMonsterDamageDealt, maximumMonsterDamageDealt);
      this.playerHealth -= currentMonsterAttack;

      this.turns.unshift({ isPlayer: false, text: `Monster hits player for ${currentMonsterAttack}`});
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
  }
});