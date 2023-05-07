export const templates = {
    start: {
        tag: 'section',
        cls: ['modal'],
        content: [
            {
                tag: 'h1',
                cls: ['caption'],
                content: 'Выбери сложность',
            },

            {
                tag: 'ul',
                cls: ['difficulty-level'],
                content: [
                    {
                        tag: 'li',
                        cls: ['difficulty-level__item'],
                        attrs: { 'data-difficulty': 'lite' },
                        content: '1',
                    },
                    {
                        tag: 'li',
                        cls: ['difficulty-level__item'],
                        attrs: { 'data-difficulty': 'medium' },
                        content: '2',
                    },
                    {
                        tag: 'li',
                        cls: ['difficulty-level__item'],
                        attrs: { 'data-difficulty': 'hight' },
                        content: '3',
                    },
                ],
            },
            {
                tag: 'button',
                cls: ['btn'],
                attrs: { id: 'auth' },
                content: 'Старт',
            },
        ],
    },
    game: (options) => ({
        tag: 'section',
        cls: ['game'],
        content: [
            {
                tag: 'header',
                cls: ['header', 'container'],
                content: [
                    {
                        tag: 'div',
                        cls: ['time'],
                        content: [
                            {
                                tag: 'div',
                                cls: ['time__container'],
                                content: [
                                    {
                                        tag: 'span',
                                        cls: ['time__text'],
                                        content: 'min',
                                    },
                                    {
                                        tag: 'span',
                                        cls: ['time__count'],
                                        attrs: { id: 'min' },
                                        content: '00',
                                    },
                                ],
                            },
                            {
                                tag: 'span',
                                cls: ['time__point'],
                                content: '.',
                            },
                            {
                                tag: 'div',
                                cls: ['time__container'],
                                content: [
                                    {
                                        tag: 'span',
                                        cls: ['time__text'],
                                        content: 'sec',
                                    },
                                    {
                                        tag: 'span',
                                        cls: ['time__count'],
                                        attrs: { id: 'sec' },
                                        content: '00',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'button',
                        cls: ['btn'],
                        attrs: { id: 'game' },
                        content: 'Начать заново',
                    },
                ],
            },
            {
                tag: 'main',
                cls: ['main', 'container'],
                content: [].concat(options),
            },
        ],
    }),
    status: (options) => ({
        tag: 'section',
        cls: ['status'],
        content: [
            {
                tag: 'header',
                cls: ['header'],
                content: [{ tag: 'div', cls: ['strip'], content: '' }],
            },
            {
                tag: 'main',
                cls: ['container'],
                content: [
                    { tag: 'h2', cls: ['caption'], content: 'Игра' },
                    {
                        tag: 'h3',
                        cls: ['vs'],
                        content: options.enemy || 'игрок еще не подключился',
                    },
                    {
                        tag: 'img',
                        cls: ['logo'],
                        attrs: {
                            src: options.logo,
                            alt: 'логотип счастливое сердце',
                        },
                    },
                    { tag: 'h1', cls: ['status'], content: options.text },
                    {
                        tag: 'button',
                        cls: ['btn-main', 'move-group__btn'],
                        attrs: { id: 'nextgame' },
                        content: 'Играть еще',
                    },
                    {
                        tag: 'button',
                        cls: ['btn-main', 'move-group__btn'],
                        attrs: { id: 'gotolobby' },
                        content: 'В лобби',
                    },
                ],
            },
        ],
    }),
};
