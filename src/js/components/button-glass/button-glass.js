class Botao extends HTMLButtonElement {
  connectedCallback() {
    this.classList.add('botao');

    if (this.hasAttribute('vermelho')) {
      this.classList.add('botao--vermelho');
    }

    if (this.hasAttribute('verde')) {
      this.classList.add('botao--verde');
    }

    if (this.hasAttribute('azul')) {
      this.classList.add('botao--azul');
    }
  }
}

customElements.define('botao', Botao, { extends: 'button' });
