class ProgressBar extends HTMLElement {

  static css = `
    :host {
      display: block;
      width: 250px;
      height: 40px;
      background: #eee;
      border-radius: 4px;
      overflow: hidden;
    }

    .fill {
      width: 0%;
      height: 100%;
      background: var(--fill-color, #222222);
      transition: width 0.25s;
    }
  `;

  static get observedAttributes() {
    return  ["percent"];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const p = document.createElement('p');

    const style = document.createElement('style');
    const fill = document.createElement("div");

    style.innerHTML = ProgressBar.css;
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