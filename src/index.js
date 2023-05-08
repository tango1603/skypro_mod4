import './style/style.scss';
import { Game } from './js/game';
import render from './js/template/template-engine';
import { templates } from './js/template/templates';

class App {
    constructor(parentNode) {
        console.log('Game started');

        this.state = {
            parentNode: parentNode,
        };

        this.start = this.start.bind(this);
        this.newGame = this.newGame.bind(this);
        this.getRandomCards = this.getRandomCards.bind(this);

        this.start();
    }

    getRandomCards(difficultyLevel) {
        const levels = { lite: 6, medium: 12, hight: 18 };
        const level = levels[difficultyLevel];

        const deckBuilder = () => {
            const values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            const suits = [
                { name: 'Hearts', imgUrl: './images/1.svg' },
                { name: 'Diamonds', imgUrl: './images/2.svg' },
                { name: 'Spades', imgUrl: './images/3.svg' },
                { name: 'Clubs', imgUrl: './images/4.svg' },
            ];
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
            const isFindOut = true;

            return { cardValue, cardSuit, isFindOut };
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

        this.state.countForWin = level;
        this.state.gameDesc = shuffleCards(shuffleCards(randomCards));
    }

    start() {
        this.state = {
            parentNode: this.state.parentNode,
            gameDesc: [],
            gameDescProcess: [],
            selectedCard: { card: null, id: null, dom: null },
            difficultyLevel: null,
            countForWin: null,
        };

        this.state.parentNode.appendChild(render(templates.start));

        this.difficultyLevelBtns = this.state.parentNode.querySelectorAll(
            '.difficulty-level__item'
        );

        for (const btn of this.difficultyLevelBtns) {
            btn.addEventListener('click', () => {
                this.state.difficultyLevel =
                    btn.getAttribute('data-difficulty');

                for (const dLBtn of this.difficultyLevelBtns) {
                    dLBtn.classList.remove('btn_selected');
                }

                btn.classList.add('btn_selected');
            });
        }

        this.startBtn = this.state.parentNode.querySelector('.btn');
        this.startBtn.addEventListener('click', () => {
            if (!this.state.difficultyLevel) return;

            this.newGame();
        });
    }
    newGame() {
        this.getRandomCards(this.state.difficultyLevel);

        this.game = new Game(this, this.state.parentNode);
        this.hide();
    }

    hide() {
        this.state.parentNode.firstElementChild.remove();
    }
}

document.addEventListener('DOMContentLoaded', onContentLoaded);
function onContentLoaded() {
    window.application = new App(document.querySelector('#app'));
}
