new Vue({
 
 el: '#app',

 data: {

 	playerHealth : 100,
 	monsterHealth : 100,
 	gameIsRunning : false ,
 	turns : []
 },

 methods: {

 	startGame: function () {

 		this.gameIsRunning = true
 		this.playerHealth  = 100
 		this.monsterHealth = 100
 		this.turns = []
 	},

 	attack: function () {

 		/* var max = 10;
 		var min = 3; */

 		/*Génerate a number between 0 and 10 in floor , and do that knowing max=10 and min=3 that's the damage */
        var damage = this.calculDamage(3, 10);

        this.monsterHealth -= damage; // monster is hurting by damage 

        //save turns here 
        this.turns.unshift({

        	isPlayer : true,
        	text : 'Player hits the monster for ' +damage

        })
        /*Test if the monster dead, it means if the player won the battle */
        if(this.checkWin()){
        	return;
        }

       /* max = 12;
        min = 5; */
        this.monsterAttack()

 	},

 	specialAttack : function () {

 		var damage = this.calculDamage(10, 20);

        this.monsterHealth -= damage; // monster is hurting by damage 

        this.turns.unshift({

        	isPlayer : true,
        	text : 'Player hits Hard the monster for ' +damage

        })
        /*Test if the monster dead, it means if the player won the battle */
        if(this.checkWin()){
        	return;
        }

       this.monsterAttack()


 	},

 	monsterAttack : function () {
 		 damage = this.calculDamage(2,9);

        this.playerHealth -= damage;  //player is hurting by the damage 
        //save turns here 
        this.turns.unshift({
        	isPlayer: false,
        	text : 'Monster hits player for ' +damage

        })
        /* Test if the monster won the battle */
        this.checkWin()

 	},

 	heal : function () {

 		if(this.playerHealth <= 90){
 			this.playerHealth += 10
 		}else 
 		{
 			this.playerHealth = 100
 		}
 		this.turns.unshift({
        	isPlayer: true,
        	text : 'Player Heals for 10 ' 

        })

 		this.monsterAttack()

 	},

 	giveUp: function () {

 		this.gameIsRunning = false

 	},

 	calculDamage : function(min, max) {

 		return  Math.max(Math.floor(Math.random() * max) + 1, min);
 	},

 	checkWin : function(){
 		if(this.monsterHealth < 0){

        	if(confirm('Player Won 😇😇😎 ! Wow ! New Game ???')){
        		this.startGame()

        	}else {
        		this.gameIsRunning = false

        	}
        	return true;

        } else if(this.playerHealth < 0){

        	if(confirm('You Lost!Monster Won 👾👾👾! New Game ???')){
        		this.startGame()
        	}else {
        		this.gameIsRunning = false
        	}
        	return true;

        }
             return false;

 	}
 }

 


})