new Vue({
    el: '#app',
    data: {
        userHealth: 100,
        monsterHealth: 100,
        startGame: false,
        turns: []
    },
    methods: {
        startNewGame: function () {
            this.startGame = true;
            this.userHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isUser: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        specialAttack: function () {
            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isUser: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        monsterAttack: function () {
            let damage = this.calculateDamage(5, 12);
            this.userHealth -= damage;
            this.turns.unshift({
                isUser: false,
                text: 'Monster hits Player for ' + damage
            });
            this.checkWin();
        },
        heal: function () {
            let health = Math.floor(Math.random() * 11) + 5; // Devuelve un entero entre 5 y 10
            if (this.userHealth < 90) {
                this.userHealth += health;
            } else {
                this.userHealth = 100;
            }
            this.turns.unshift({
                isUser: true,
                text: 'Player hits for ' + health
            });
            this.monsterAttack();
        },
        giveUp: function () {
            if (confirm('Are you sure you want to quit?')) {
                this.startGame = false;
                this.userHealth = 100;
                this.monsterHealth = 100;
                this.turns = [];
            }
        },
        calculateDamage: function (min, max) {
            // Devuelve un entero entre min y max
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startNewGame();
                } else {
                    this.startGame = false;
                }
                return true;
            } else if (this.userHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startNewGame();
                } else {
                    this.startGame = false;
                }
                return true;
            }
            return false;
        }
    }
});