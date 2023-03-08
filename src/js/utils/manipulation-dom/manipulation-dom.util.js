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
}
