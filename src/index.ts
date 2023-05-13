import './style/style.scss';
import { Game } from './game';
import render from './js/template/template-engine';
import { templates } from './js/template/templates';
import './interfaces.ts';

class App {
    difficultyLevelBtns: NodeListOf<HTMLFormElement>;

    game: Game;
    startBtn: HTMLFormElement;
    state: State;
    constructor(parentNode: HTMLFormElement) {
        console.log('Game started');

        this.state = {
            parentNode: parentNode,
        };

        this.start = this.start.bind(this);
        this.newGame = this.newGame.bind(this);
        this.getRandomCards = this.getRandomCards.bind(this);

        this.start();
    }

    getRandomCards(difficultyLevel: string) {
        const levels = { lite: 6, medium: 12, hight: 18 };
        const level = levels[difficultyLevel];

        const deckBuilder = () => {
            const values: Array<string> = [
                '6',
                '7',
                '8',
                '9',
                '10',
                'J',
                'Q',
                'K',
                'A',
            ];
            const suits: Array<Suit> = [
                { name: 'Hearts', imgUrl: './images/1.svg' },
                { name: 'Diamonds', imgUrl: './images/2.svg' },
                { name: 'Spades', imgUrl: './images/3.svg' },
                { name: 'Clubs', imgUrl: './images/4.svg' },
            ];
            const cards: Array<Card> = [];
            for (let s = 0; s < suits.length; s++) {
                for (let v = 0; v < values.length; v++) {
                    const cardValue = values[v];
                    const cardSuit = suits[s];

                    cards.push({ cardValue, cardSuit });
                }
            }
            return cards;
        };

        const randomCard = (cards: Array<Card>) => {
            const random: number = Math.floor(Math.random() * 36);
            const cardValue = cards[random].cardValue;
            const cardSuit = cards[random].cardSuit;
            const isFindOut = true;

            return { cardValue, cardSuit, isFindOut };
        };

        const shuffleCards = (cardsArray: Array<Card>) => {
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
        for (let i = 0; i < this.difficultyLevelBtns.length; i++) {
            const btn = this.difficultyLevelBtns[i];

            btn.addEventListener('click', () => {
                this.state.difficultyLevel =
                    btn.getAttribute('data-difficulty');

                for (let i = 0; i < this.difficultyLevelBtns.length; i++) {
                    this.difficultyLevelBtns[i].classList.remove(
                        'btn_selected'
                    );
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

        this.game = new Game(this.state, this.start);
        this.hide();
    }

    hide() {
        this.state.parentNode.firstElementChild.remove();
    }
}

document.addEventListener('DOMContentLoaded', onContentLoaded);
function onContentLoaded() {
    // @ts-expect-error TS(2339): Property 'application' does not exist on type 'Win... Remove this comment to see the full error message
    window.application = new App(document.querySelector('#app'));
}