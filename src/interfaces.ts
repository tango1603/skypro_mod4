interface Suit {
    name: string;
    imgUrl: string;
}

interface Message {
    logoUrl: string;
    message: string;
}

interface Card {
    cardValue: string;
    cardSuit: Suit;
    isFindOut?: boolean;
}

interface SelectedCard {
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
    start: () => void;
    stop: () => void;
    displayTimer: () => void;
}

interface State {
    parentNode: Element;
    countForWin?: number;
    difficultyLevel?: string;
    selectedCard?: SelectedCard;
    gameDesc?: Array<Card>;
    gameDescProcess?: Array<Card>;
    timer?: GameTimer;
}

interface Template {
    tag: string;
    cls: string | Array<string>;
    attrs?: {};
    content?: Array<Template> | string;
}
