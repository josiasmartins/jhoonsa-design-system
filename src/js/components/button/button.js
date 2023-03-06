import './button.css';

class Button {
  constructor({ label, onClick }) {
    this.label = label;
    this.onClick = onClick;
    this.render();
  }

  render() {
    this.button = document.createElement('button');
    this.button.classList.add('button');
    this.button.textContent = this.label;
    this.button.addEventListener('click', this.onClick);
  }

  mount(element) {
    element.appendChild(this.button);
  }

}

export default Button;
