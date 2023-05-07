import './style/style.scss';
import { Game } from './js/game.js';

class App {
    constructor(parentNode) {
        console.log('Game started', this);
        this.parentNode = parentNode;
        this.state = {
            parentNode: this.parentNode,
            gameDesc: [],
            selectedCards: [],
            difficultyLevel: null,
        };
        this.setBtnsLogic();
    }

    getRandomCards(difficultyLevel) {
        const levels = { lite: 6, medium: 12, hight: 18 };
        const level = levels[difficultyLevel];

        const deckBuilder = () => {
            const values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
            const cards = [];
            for (let s = 0; s < suits.length; s++) {
                for (let v = 0; v < values.length; v++) {
                    const value = values[v];
                    const suit = suits[s];
                    cards.push({ value, suit });
                }
            }
            return cards;
        };

        const randomCard = (cards) => {
            const random = Math.floor(Math.random() * 36);
            const cardValue = cards[random].value;
            const cardSuit = cards[random].suit;

            return { cardValue, cardSuit };
        };

        const shuffleCards = (cardsArray) => {
            const shuffle = [...cardsArray];
            for (let i = shuffle.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
            }
            return shuffle;
        };

        const cards = deckBuilder();
        const randomCards = [];
        for (let i = 0; i < level; i = i + 2) {
            const card = randomCard(cards);
            randomCards.push(card);
            randomCards.push(card);
        }

        this.state.gameDesc = shuffleCards(shuffleCards(randomCards));

        console.log('randomCard:', this.state.gameDesc);
    }

    getTimeInGame() {
        this.state.timer = {
            domMin: this.parentNode.querySelector('#min'),
            domSec: this.parentNode.querySelector('#sec'),
            seconds: 0,
            minutes: 0,
            int: null,
            start() {
                if (this.int !== null) {
                    clearInterval(this.int);
                }
                console.log('start', this);
                this.int = setInterval(this.displayTimer.bind(this), 1000);
            },
            stop() {
                clearInterval(this.int);
            },
            displayTimer() {
                this.seconds++;
                if (this.seconds === 60) {
                    this.seconds = 0;
                    this.minutes++;
                    if (this.minutes === 60) {
                        this.minutes = 0;
                    }
                }

                let m = this.minutes < 10 ? '0' + this.minutes : this.minutes;
                let s = this.seconds < 10 ? '0' + this.seconds : this.seconds;

                console.log(`${m} : ${s}`);
            },
        };

        this.state.timer.start();
    }

    setBtnsLogic() {
        this.difficultyLevelBtns = this.parentNode.querySelectorAll(
            '.difficulty-level__item'
        );

        for (const btn of this.difficultyLevelBtns) {
            btn.addEventListener('click', () => {
                this.state.difficultyLevel =
                    btn.getAttribute('data-difficulty');
                console.log(
                    'difficulty-level__item click',
                    this.state.difficultyLevel
                );

                for (const dLBtn of this.difficultyLevelBtns) {
                    dLBtn.classList.remove('btn_selected');
                }

                btn.classList.add('btn_selected');
            });
        }

        this.startBtn = this.parentNode.querySelector('.btn');
        this.startBtn.addEventListener('click', () => {
            if (!this.state.difficultyLevel) return;

            this.getRandomCards(this.state.difficultyLevel);
            this.game = new Game(this.state, this.parentNode);
            this.hide();
            this.getTimeInGame();
        });
    }

    hide() {
        console.log('hide()');
        this.parentNode.firstElementChild.remove();
    }
}

document.addEventListener('DOMContentLoaded', onContentLoaded);
function onContentLoaded() {
    window.application = new App(document.querySelector('#app'));
}
