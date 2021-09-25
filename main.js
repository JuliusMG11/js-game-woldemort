'use-strict'


// GAME SETTINGS

const game = {
    status: 0,
    randomAttack(min, max) {
         return Math.floor( Math.random() * (max - min + 1)) + min;
    },

   /* startGame: function() {

        if (enemy.health >= 0 && player.health >= 0) {

                enemy.attack();
        }

        if ( enemy.health >= 0 && player.health >= 0) {
                player.attack();
                game.startGame();
        }
    }*/

    // RESET GAME

    resetGame() {

        
    if( game.status == 1 ) game.status = 0;

        player.healthBar.css({
            "width": 100 + '%'
        });

        player.health = 100;

        enemy.healthBar.css({
            "width": 100 + '%'
        });

        enemy.health = 100;

    },

    // RUNNING GAME TEXT

    runningGame() {

        let run = document.getElementById('runningGame');

        if ( this.status == 0) {
            
            run.innerHTML = 'new Game';

        } else if (this.status == 1) {
            
            run.innerHTML = 'running Game';
        
        }
    },


    // END GAME

    endGame() {

    }
};


// PLAYERS DATA

const player = {
    health: 100,
    healthBar: $('.soldier .progress-bar'), // HEATHBAR

    attack() {

        player.health = player.health - game.randomAttack(1, 5);
            
        player.healthBar.css({
                "width": player.health + '%'
            });
       
    },
};


// WOLDEMORD SETTINGS -- ENEMY

const enemy =  {
    health: 100,
    healthBar: $('.enemy .progress-bar'),
    utilityAttackDamage : 40, // Utylity damage
    utilityAttackCastChance: 0, // Utility chance


    attack() {
        
            enemy.health = enemy.health - game.randomAttack(1, 3);
            enemy.healthBar.css({
                "width": enemy.health + '%'
            });
            
        
    },

    utilityAttack() {

        this.utilityAttackCastChance = Math.ceil(Math.random() * 10);

        if ( this.utilityAttackCastChance <= 1) this.utilityAttack();

       enemy.health = enemy.health - game.randomAttack(2, 6);
            enemy.healthBar.css({
                "width": enemy.health + '%'
        });
    },
};



function startGame() {
    

    // ATTACK SETTINGS

    let soldierAttack = document.getElementById('attackSoldier');

    soldierAttack.addEventListener('click', function() {
        
        if( game.status == 0 ) game.status = 1;

        enemy.attack();
        
        if (game.status == 1) game.runningGame();

    });

    // SOLDIER UTILITY ATTACK

    let bigAttack = document.getElementById('utilityAttack');

    if( game.status == 0 ) game.status = 1;

    bigAttack.addEventListener('click', function() {
        enemy.utilityAttack();
        if (game.status == 1) game.runningGame();
    });



    // ATTACK WOLDEMORT

    let enemyAttack = document.getElementById('attackEnemy');

    enemyAttack.addEventListener('click', function() {
        
        if( game.status == 0 ) game.status = 1;
     
        player.attack();
        if (game.status == 1) game.runningGame();
        
    });



    // RESET GAME

    let resetButton = document.getElementById('reset');

    resetButton.addEventListener('click', function() {
        game.resetGame();
    });



  

}

startGame();

