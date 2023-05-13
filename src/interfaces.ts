interface Suit {
    name: string;
    imgUrl: string;
}

interface Card {
    cardValue: string;
    cardSuit: Suit;
    isFindOut?: boolean;
}

interface selectedCard {
    card?: Card;
    id?: string;
    dom?: Element;
}

interface GameTimer {
    domMin: HTMLElement;
    domSec: HTMLElement;
    seconds: number;
    minutes: number;
    int?: ReturnType<typeof setInterval> | undefined;
    start: Function;
    stop: Function;
    displayTimer: Function;
}

interface State {
    parentNode: Element;
    countForWin?: number;
    difficultyLevel?: string;
    selectedCard?: selectedCard;
    gameDesc?: Array<Card>;
    gameDescProcess?: Array<Card>;
    timer?: GameTimer;
}

interface Template {
    tag: string;
    cls: string | Array<string>;
    attrs?: object;
    content: string | Array<Template>;
}
