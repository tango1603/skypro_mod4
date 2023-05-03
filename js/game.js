export class Game {
  constructor(state) {
    this.state = state;    
    this.render();
  }

  getRandomCards(difficultyLevel){}

  getTimeInGame(){}

  render() {
    //TODO: реализовать рендер по шаблону
    console.log("renderGame", this.state);

  }
}