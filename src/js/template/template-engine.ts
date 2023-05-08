export default function render(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('');
    }

    if (
        typeof block === 'string' ||
        typeof block === 'number' ||
        block === true
    ) {
        return document.createTextNode(block);
    }

    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment();

        block.forEach((item) => {
            const el = render(item);
            fragment.appendChild(el);
        });

        return fragment;
    }

    const element = document.createElement(block.tag);

    if (block.cls) {
        element.classList.add(...[].concat(block.cls).filter(Boolean));
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs);
        keys.forEach((key) => {
            // href
            element.setAttribute(key, block.attrs[key]);
        });
    }

    const content = render(block.content);
    element.appendChild(content);
    return element;
}
