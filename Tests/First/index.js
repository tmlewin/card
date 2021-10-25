// Import stylesheets
// import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;


class Game {

  /**
   * Sets up the game
   * @param {string} player1Name The name of player 1
   * @param {string} player2Name The name of player 2
   */
  constructor(player1Name="pl1", player2Name="pl2"){
    this.theEnd = false; 

    this.player1 = {
      name: player1Name,
      health: 100
    }

    this.player2 = {
      name: player2Name,
      health: 100
    }
    
  }

  /**
   * Starts the game and logs out the status of players
   */
  start(){
    this.reset()
    while(!this.theEnd){
      this.pl1AttackPl2()
      this.pl2Heal()
      this.pl2AttackPl1();
      this.pl1Heal()
      this.playerStatus()
      this.checkTheEnd()
    }
    this.declareWinner()
  }

  /**
   * Console log the winner of the battle
   */
  declareWinner(){
   console.log(this.player1.health > 0  ? thisplayer1 : this.player2)
    
  }

  /**
   * If player 1 or player 2 health is below 0
   * Mark theEnd true, to stop the game
   */
  
  checkTheEnd(){
    if(this.player1.health < 0 || this.player2.health < 0){
      return  this.theEnd = true

    }
  }

  /**
   * Console log the name and health of both players
   * Ex: Player 1: 100 | Player 2: 50
   */
  playerStatus(){ 
    console.log('Player Name is '+ this.player1.name+ 'and player1 Health level is '+this.player1.health)
    console.log('Player Name is '+ this.player2.name+ 'and player1 Health level is '+this.player2.health)

  }

  /**
   * Reset health of player 1 and player 2 to 100
   * Reset theEnd to false
   */
  reset(){ 
    this.player1.health = 100
    this.player2.health = 100
    this.theEnd = false
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 2
   */
  pl1AttackPl2(){ 
    let random = Math.floor(Math.random() * 10) + 1;
    return this.player2.health - random
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 1
   */
  pl2AttackPl1(){ 
    let random = Math.floor(Math.random() * 10) + 1;
    return this.player1.health - random
    
  }
 

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 1
   */
  pl1Heal(){
    let random = Math.floor(Math.random() * 5) + 1;
    return random  + this.player1.health
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 2
   */
  pl2Heal(){ 
    let random = Math.floor(Math.random() * 5) + 1;
    return random  + this.player2.health
  }

}
let games = new Game()
games.start()
// Initialize the class here
// Call the start function of the game