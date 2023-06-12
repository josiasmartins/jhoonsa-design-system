import styleCss from './jhoonsa-videos.css';
import styleTheme from '../../../styles/themes/index.css';
import styleThemelight from '../../../styles/themes/light.css';
import styleThemeDark from '../../../styles/themes/dark.css';
import { concatImportStyle } from '../../utils/toogle-theme/toogle-theme.js';
import { createObjectPropertyCss } from '../../utils/manipulation-dom/manipulation-dom.util.js'

class JhoonsaVideos extends HTMLElement {

  container = null;

  constructor() {
    super();

    this.jhoonsaColor = null;

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Adiciona os estilos da aplicação
    const style = document.createElement('style');
    style.innerHTML = concatImportStyle(styleTheme, styleThemelight, styleThemeDark, styleCss);

    // Cria o elemento container para os vídeos
    this.container = document.createElement('section');
    this.container.classList.add('jhoonsa-videos-container');

    // Adiciona o estilo e o container ao Shadow DOM
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(this.container);

    this.videos = [];
  }

  static get observedAttributes() {
    return ['videos', 'jhoonsa-color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'videos' && oldValue !== newValue) {
      try {
        const parsedValue = JSON.parse(newValue);
        if (Array.isArray(parsedValue)) {
          this.videos = parsedValue;
          this.render();
        }
      } catch (err) {
        console.error(err);
      }
    } else if (name === 'jhoonsa-color' && oldValue !== newValue) {
      this.jhoonsaColor = newValue;
      this.setBoxShadowColor();
    }
  }

  setBoxShadowColor() {
    // const colors = {
    //   jhoonsaColor: {
    //     default: '0 8px 32px 0 rgb(5 22 250 / 37%)',
    //     blueStrong: '0 8px 32px 0 rgb(31 0 255 / 49%)',
    //     purple: '0 8px 32px 0 rgb(96 0 255 / 49%)',
    //     green: '0 8px 32px 0 rgb(0 255 124 / 49%)',
    //     red: '0 8px 32px 0 rgb(255 0 0 / 49%)',
    //   },
    //   dark: {
    //     default: '',
    //   }
    // };

    const colors = createObjectPropertyCss();

    console.log(this.jhoonsaColor, "ibag jhoonsa");

    const videoDivs = this.shadowRoot.querySelectorAll('.jhoonsa-videos');
    videoDivs.forEach(videoDiv => {
      if (this.jhoonsaColor) {
        const color = colors.light[this.jhoonsaColor] || colors.light.default;
        videoDiv.style.setProperty('box-shadow', color);
      }
    });

  }

  render() {
    this.container.innerHTML = '';
    // Renderiza cada vídeo na página
    this.videos.forEach((video) => {
      const [url, title] = video;
      let videoDiv = document.createElement('div');
      videoDiv.classList.add('jhoonsa-videos');

      videoDiv.style.backgroundColor = this.jhoonsaColor; // define a cor de fundo da tag customizada

      videoDiv.innerHTML = `
        <div class="jhoonsa-videos__iframe">
          <iframe width="100%" height="240" src="${url}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h3 class="jhoonsa-videos__title">${title}</h3>
      `;
      this.container.appendChild(videoDiv);
    });
  }
}

customElements.define('jhoonsa-videos', JhoonsaVideos);
