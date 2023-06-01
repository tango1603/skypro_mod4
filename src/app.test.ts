import { expect, test } from '@jest/globals';

import { App } from './app';

test('getRandomCards returns an array of cards with correct length based when difficulty level medium', () => {
    const app = new App(document.createElement('div'));
    const liteCards = app.getRandomCards('lite');
    const mediumCards = app.getRandomCards('medium');
    const hightCards = app.getRandomCards('hight');

    expect(liteCards.length).toBe(6);
    expect(mediumCards.length).toBe(12);
    expect(hightCards.length).toBe(18);
});

test('getRandomCards returns an array of cards that is shuffled', () => {
    const app = new App(document.createElement('div'));
    const cards1 = app.getRandomCards('lite');
    const cards2 = app.getRandomCards('lite');

    expect(cards1).not.toEqual(cards2);
});
