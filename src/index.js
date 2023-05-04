import './style/style.scss';
import { Game } from './js/game.js';

class App {
    constructor(parentNode) {
        console.log('Game started', this);
        this.parentNode = parentNode;

        this.difficultyLevel = null;
        this.timeInGame = null; //TODO: реализовать getTimeInGame()
        this.cards = []; //TODO: реализовать getRandomCards(difficultyLevel)
        this.selectedCards = [];

        this.render();

        this.difficultyLevelBtns = parentNode.querySelectorAll(
            '.difficulty-level__item'
        );

        for (const btn of this.difficultyLevelBtns) {
            btn.addEventListener('click', () => {
                this.difficultyLevel = btn.getAttribute('data-difficulty');
                console.log(
                    'difficulty-level__item click',
                    this.difficultyLevel
                );

                for (const cbtn of this.difficultyLevelBtns) {
                    cbtn.classList.remove('btn_selected');
                }

                btn.classList.add('btn_selected');
            });
        }

        this.startBtn = parentNode.querySelector('.btn');
        this.startBtn.addEventListener('click', () => {
            if (!this.difficultyLevel) return;

            this.game = new Game(this);
            this.hide();
        });
    }

    hide() {
        console.log('hide()');
        this.parentNode.firstElementChild.remove();
    }

    render() {
        return 1;
        //TODO: реализовать рендер по шаблону
    }
}

document.addEventListener('DOMContentLoaded', onContentLoaded);
function onContentLoaded() {
    window.application = new App(document.querySelector('#app'));
}
