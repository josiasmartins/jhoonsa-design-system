export const createElement = (element) => {
  document.createElement(element);
}

export const searchElement = (element) => {
  document.querySelector(element);

  document.createDocumentFragment();
}

export const createTemplate = (templateImport) => {
  // const templateElement = document.createElement('template');
  // templateElement.innerHTML = templateImport;
  // addElement = templateElement.content.cloneNode(true);
  const templateElement = document.createElement('template');
  templateElement.innerHTML = templateImport;
  return templateElement.content.cloneNode(true);
};

export const createObjectPropertyCss = () => {
  const root = getComputedStyle(document.documentElement);
  const dark = getComputedStyle(document.documentElement, ':root.dark');

  console.log(root, dark, "ibag color");

  const objectProperty = {
    light: {
      default:  root.getPropertyValue('--shadown-color-default'),
      blueStrong: root.getPropertyValue('--shadown-color-blue-strong'),
      purple: root.getPropertyValue('--shadown-color-purple'),
      green: root.getPropertyValue('--shadown-color-green'),
      red: root.getPropertyValue('--shadown-color-red'),
    },
    dark: {
      default: dark.getPropertyValue('--shadown-color-default'),
      blueStrong: dark.getPropertyValue('--shadown-color-default'),
      purple: dark.getPropertyValue('--shadown-color-default'),
      green: dark.getPropertyValue('--shadown-color-default'),
      red: dark.getPropertyValue('--shadown-color-default'),
    }
  };

  console.log(objectProperty, "ibag objeto color")

  return objectProperty;
}
