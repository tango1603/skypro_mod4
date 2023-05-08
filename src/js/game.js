import render from './template/template-engine';
import { templates } from './template/templates';

export class Game {
    constructor(app) {
        console.log('Game', this);
        this.state = app.state;
        this.restartGame = app.start;
        this.cardsForRender = [];
        this.checkCards = this.checkCards.bind(this);
        this.hideCards = this.hideCards.bind(this);

        this.render();

        this.btn = this.state.parentNode.querySelector('#game');
        this.btn.addEventListener('click', () => {
            this.hide();
            this.restartGame();
        });

        this.cards = this.state.parentNode.querySelectorAll('.card');

        this.cards.forEach((card) => {
            card.addEventListener('click', () => this.checkCards(card));
        });

        this.getTimeInGame();
        this.showCards();
    }

    getTimeInGame() {
        this.state.timer = {
            domMin: this.state.parentNode.querySelector('#min'),
            domSec: this.state.parentNode.querySelector('#sec'),
            seconds: 0,
            minutes: 0,
            int: null,
            start() {
                if (this.int !== null) {
                    clearInterval(this.int);
                }
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

                this.domMin.innerText = `${m}`;
                this.domSec.innerText = `${s}`;
            },
        };

        this.state.timer.start();
    }

    render() {
        this.state.gameDesc.forEach((card, cardIndex) => {
            this.cardsForRender.push({
                tag: 'div',
                cls: ['card'],
                attrs: {
                    'data-cid': `${cardIndex}`,
                },
                content: [
                    {
                        tag: 'img',
                        cls: ['front'],
                        attrs: {
                            src: './images/rubashka.svg',
                            alt: 'рубашка карты',
                        },
                    },
                    {
                        tag: 'div',
                        cls: ['back'],
                        content: [
                            {
                                tag: 'div',
                                cls: ['card-container'],
                                content: [
                                    {
                                        tag: 'div',
                                        cls: ['card-container__block'],
                                        content: [
                                            {
                                                tag: 'div',
                                                cls: ['card-container__box'],
                                                content: [
                                                    {
                                                        tag: 'div',
                                                        cls: [
                                                            'card-container__box',
                                                        ],
                                                        content: `${card.cardValue}`,
                                                    },
                                                    {
                                                        tag: 'img',
                                                        cls: [
                                                            'card-container__icon',
                                                        ],
                                                        attrs: {
                                                            src: `${card.cardSuit.imgUrl}`,
                                                            alt: 'масть карты mini',
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        tag: 'img',
                                        cls: ['card-container__logo'],
                                        attrs: {
                                            src: `${card.cardSuit.imgUrl}`,
                                            alt: 'масть карты',
                                        },
                                    },
                                    {
                                        tag: 'div',
                                        cls: [
                                            'card-container__block',
                                            'card-container__block--down',
                                        ],
                                        content: [
                                            {
                                                tag: 'div',
                                                cls: ['card-container__box'],
                                                content: [
                                                    {
                                                        tag: 'div',
                                                        cls: [
                                                            'card-container__box',
                                                        ],
                                                        content: `${card.cardValue}`,
                                                    },
                                                    {
                                                        tag: 'img',
                                                        cls: [
                                                            'card-container__icon',
                                                        ],
                                                        attrs: {
                                                            src: `${card.cardSuit.imgUrl}`,
                                                            alt: 'масть карты mini',
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });

        this.state.parentNode.appendChild(
            render(templates.game(this.cardsForRender))
        );
    }

    checkCards(card) {
        const curId = card.dataset.cid;
        const curCard = this.state.gameDesc[curId];
        const { selectedCard } = this.state;
        console.log(selectedCard, curCard);
        if (!selectedCard.card) {
            selectedCard.card = curCard;
            selectedCard.id = curId;
            selectedCard.dom = card;
            card.classList.add('card--active');
            return;
        }

        if (
            selectedCard.card.cardValue === curCard.cardValue &&
            selectedCard.card.cardSuit.name === curCard.cardSuit.name
        ) {
            this.state.countForWin = this.state.countForWin - 2;

            this.state.gameDesc[card.dataset.cid].isFindOut = false;
            this.state.gameDesc[selectedCard.id].isFindOut = false;
            card.classList.add('card--active');
            selectedCard.card = null;
            selectedCard.id = null;
            selectedCard.dom = null;
        } else {
            selectedCard.dom.classList.remove('card--active');
            setTimeout(this.showLoseMessage.bind(this), 500);
        }

        if (this.state.countForWin === 0) {
            setTimeout(this.showWinMessage.bind(this), 500);
        }
    }

    showLoseMessage() {
        alert('You lose!');
    }

    showWinMessage() {
        alert('You win!');
    }

    showCards() {
        this.cards.forEach((card) => {
            card.classList.add('card--active');
        });
        this.tempTimer = setTimeout(this.hideCards, 5000);
        console.log('🚀 ~ file: game.js:213 ~ Game ~ showCards ~ showCards:');
    }
    hideCards() {
        console.log('🚀 ~ file: game.js:219 ~ Game ~ hideCards ~ hideCards:');
        this.cards.forEach((card) => {
            card.classList.remove('card--active');
        });
    }

    hide() {
        this.state.timer.stop();
        this.state.parentNode.firstElementChild.remove();
    }
}
