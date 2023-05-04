export class Game {
    constructor(state) {
        this.state = state;
        this.render();
    }

    getRandomCards(difficultyLevel) {
        return difficultyLevel * 2;
    }

    getTimeInGame() {}

    render() {
        //TODO: реализовать рендер по шаблону
        console.log('renderGame', this.state);
    }
}
