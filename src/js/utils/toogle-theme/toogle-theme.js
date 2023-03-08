export const toogleTheme = () => {

}

export const concatImportStyle = (...value) => {
  let concateValue = value.join('');
  console.log(concateValue);
  concateValue = _excludeImportFileCss(concateValue);
  return concateValue;
}

const _excludeImportFileCss = (css) => {
  const regex = /@import\s*['"](.*?)['"];/gi;
  css = css.replace(regex, '');
  console.log(css);
  return css;
}
