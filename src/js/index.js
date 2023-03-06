// import Button from './components/button/button';

const buttons = document.querySelectorAll('[data-button]');

buttons.forEach((button) => {
  const label = button.getAttribute('data-label');
  const onClick = () => {
    const callback = new Function(button.getAttribute('data-on-click'));
    callback();
  };
  const customButton = new Button({ label, onClick });
  customButton.mount(button);
});


export const imprimeJhoonsa = () => {
  alert("jhoonsa");
}

export const createElement = (element, escopo) => {
  console.log(`elemento ${element} criado`);
  return document.createElement(element);
}

// export { createElement }

// exports.modules = {
//   createElement
// }
