import './style/style.scss';
import { App } from './app';

document.addEventListener('DOMContentLoaded', onContentLoaded);
function onContentLoaded() {
    // @ts-expect-error TS(2339): Property 'application' does not exist on type 'Win... Remove this comment to see the full error message
    window.application = new App(document.querySelector('#app'));
}
