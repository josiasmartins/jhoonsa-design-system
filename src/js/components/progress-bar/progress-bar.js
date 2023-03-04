import cssStyle from './progress-bar.css';
import { createElement } from '../../index.js';

class ProgressBar extends HTMLElement {


  // static css;

  static get observedAttributes() {
    return  ["percent"];
  }

  constructor() {
    super();

    // document.createElement(`<script src="https://unpkg.com/pt-css-tool/dist/css-tool.min.js"></script>`)

    this.attachShadow({ mode: 'open' });

    const p = document.createElement('p');

    const style = createElement('style', this);
    const fill = document.createElement("div");

    style.innerHTML = cssStyle;

    fill.classList.add("fill");

    this.shadowRoot.append(style, fill);
  }


  get percent() {
    const value = this.getAttribute("percent");

    if (isNaN(value)) {
      return 0
    }

    if (value > 100) {
      return 100;
    }

    return Number(value);
  }

  set percent(value) {
    this.setAttribute("percent", value);
  }

  attributeChangedCallback(name, oldValue, newValue) {

    if (name === "percent") {
      this.shadowRoot.querySelector('.fill').style.width = `${ this.percent }%`
    }

    console.log(name);
  }

}

customElements.define('jhoonsa-progress-bar', ProgressBar)
