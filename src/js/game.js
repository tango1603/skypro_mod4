import render from './template/template-engine';
import { templates } from './template/templates';

export class Game {
    constructor(app) {
        console.log('Game', this);
        this.state = app.state;
        this.restartGame = app.start;
        this.cardsForRender = [];

        this.render();

        this.btn = this.state.parentNode.querySelector('#game');
        this.btn.addEventListener('click', () => {
            this.hide();
            this.restartGame();
            console.log('начать с начала', this);
        });
        this.getTimeInGame();
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

                this.domMin.innerText = `${m}`;
                this.domSec.innerText = `${s}`;
                console.log(`${m} : ${s}`);
            },
        };

        this.state.timer.start();
    }

    render() {
        console.log(
            '🚀 ~ file: game.js:115 ~ Game ~ this.state.gameDesc.forEach ~ this.state.gameDesc:',
            this.state.gameDesc
        );

        this.state.gameDesc.forEach(() => {
            this.cardsForRender.push({
                tag: 'div',
                cls: ['card'],
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
                                                        content: 'A',
                                                    },
                                                    {
                                                        tag: 'img',
                                                        cls: [
                                                            'card-container__icon',
                                                        ],
                                                        attrs: {
                                                            src: './images/vini.svg',
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
                                            src: './images/vini.svg',
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
                                                        content: 'A',
                                                    },
                                                    {
                                                        tag: 'img',
                                                        cls: [
                                                            'card-container__icon',
                                                        ],
                                                        attrs: {
                                                            src: './images/vini.svg',
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
        //TODO: реализовать рендер по шаблону
        console.log('renderGame', this.state);
    }

    hide() {
        console.log('hide()');
        this.state.timer.stop();
        this.state.parentNode.firstElementChild.remove();
    }
}
