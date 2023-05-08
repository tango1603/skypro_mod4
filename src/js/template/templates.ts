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
        cls: ['modal', 'status'],
        content: [
            {
                tag: 'img',
                cls: ['status__logo'],
                attrs: {
                    src: `${options.logo}`,
                    alt: 'status logo',
                },
            },
            {
                tag: 'h1',
                cls: ['status__caption'],
                content: `${options.message}`,
            },
            {
                tag: 'p',
                cls: ['status__text'],
                content: `Затраченное время:`,
            },
            {
                tag: 'p',
                cls: ['status__time'],
                content: `${options.time}`,
            },

            {
                tag: 'button',
                cls: ['btn'],
                attrs: { id: 'status' },
                content: 'Старт',
            },
        ],
    }),
};
