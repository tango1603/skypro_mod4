export const templates = {
    auth: {
        tag: 'section',
        cls: ['auth'],
        content: [
            {
                tag: 'img',
                cls: ['picture'],
                attrs: { src: '../img/trio_full.png', alt: 'логотип игры' },
            },

            {
                tag: 'div',
                cls: ['container'],
                content: [
                    {
                        tag: 'h1',
                        cls: ['caption'],
                        content: 'Камень, ножницы, бумага',
                    },
                    {
                        tag: 'div',
                        cls: ['input-group'],
                        content: [
                            {
                                tag: 'label',
                                cls: ['label'],
                                attrs: { for: 'nik' },
                                content: 'Никнейм',
                            },
                            {
                                tag: 'input',
                                cls: ['input'],
                                attrs: { type: 'text', id: 'nik' },
                            },
                        ],
                    },
                    {
                        tag: 'button',
                        cls: ['btn-main', 'btn-form'],
                        attrs: { id: 'auth' },
                        content: 'Войти',
                    },
                ],
            },
        ],
    },
    lobby: (options) => ({
        tag: 'section',
        cls: ['lobby'],
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
                    { tag: 'h1', cls: ['caption'], content: 'Лобби' },
                    {
                        tag: 'div',
                        cls: ['btn-group'],
                        content: [
                            {
                                tag: 'div',
                                cls: ['lobby-group'],
                                content: [].concat(options),
                            },
                            {
                                tag: 'button',
                                cls: ['btn-main', 'btn-form'],
                                attrs: { id: 'lobby' },
                                content: 'Играть!',
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'header',
                cls: ['header'],
                content: [
                    {
                        tag: 'img',
                        cls: ['picture'],
                        attrs: {
                            src: './img/trio_white.png',
                            alt: 'логотип игры',
                        },
                    },
                ],
            },
        ],
    }),
    game: (options) => ({
        tag: 'section',
        cls: ['game'],
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
                    { tag: 'h1', cls: ['caption'], content: 'Игра' },
                    {
                        tag: 'h2',
                        cls: ['vs'],
                        content: options.enemy || 'игрок еще не подключился',
                    },

                    {
                        tag: 'div',
                        cls: ['move-group'],
                        content: [
                            {
                                tag: 'img',
                                attrs: {
                                    src: '../img/first.png',
                                    alt: 'Камень',
                                },
                            },
                            {
                                tag: 'button',
                                cls: ['btn-main', 'move-group__btn'],
                                attrs: { id: 'rock' },
                                content: 'Камень',
                            },
                        ],
                    },
                    {
                        tag: 'div',
                        cls: ['move-group'],
                        content: [
                            {
                                tag: 'img',
                                attrs: {
                                    src: '../img/two_fingers.png',
                                    alt: 'Ножницы',
                                },
                            },
                            {
                                tag: 'button',
                                cls: ['btn-main', 'move-group__btn'],
                                attrs: { id: 'scissors' },
                                content: 'Ножницы',
                            },
                        ],
                    },
                    {
                        tag: 'div',
                        cls: ['move-group'],
                        content: [
                            {
                                tag: 'img',
                                attrs: {
                                    src: '../img/palm.png',
                                    alt: 'Бумага',
                                },
                            },
                            {
                                tag: 'button',
                                cls: ['btn-main', 'move-group__btn'],
                                attrs: { id: 'paper' },
                                content: 'Бумага',
                            },
                        ],
                    },
                ],
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
    waiting: (options) => ({
        tag: 'section',
        cls: ['waiting'],
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
                    { tag: 'h1', cls: ['caption'], content: 'Игра' },
                    {
                        tag: 'h2',
                        cls: ['vs'],
                        content: `Вы против: ${
                            options.enemy || 'игрок еще не подключился'
                        }`,
                    },
                    {
                        tag: 'img',
                        cls: ['logo'],
                        attrs: {
                            src: './img/sand watch.png',
                            alt: 'логотип песочных часов',
                        },
                    },
                    {
                        tag: 'h3',
                        cls: ['text'],
                        content: '...',
                    },
                ],
            },
        ],
    }),
};
