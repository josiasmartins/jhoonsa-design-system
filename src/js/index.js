import Button from './components/button/button';

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
