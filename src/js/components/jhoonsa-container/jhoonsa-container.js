import css from './jhoonsa-container.css';
import templateHmlt from './jhoonsa-container.html'
class GlassContainer extends HTMLElement {
  constructor() {
    super();
    document.template = templateHmlt;
    const template = document.getElementById('glass-container');

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.cloneNode(true));

    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    shadowRoot.prepend(styleElement);
  }
}

window.customElements.define('glass-container', GlassContainer);
