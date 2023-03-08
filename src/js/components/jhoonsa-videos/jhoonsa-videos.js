import template from './jhoonsa-videos.html';
import styleCss from './jhoonsa-videos.css';
import styleTheme from '../../../styles/themes/index.css';
import styleThemelight from '../../../styles/themes/light.css';
import styleThemeDark from '../../../styles/themes/dark.css';
import { concatImportStyle } from '../../utils/toogle-theme/toogle-theme.js';
import { createTemplate } from '../../utils/manipulation-dom/manipulation-dom.util.js'

class JhoonsaVideos extends HTMLElement {

  container = null;

  constructor() {
    super();
    console.log()
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.innerHTML = concatImportStyle(styleTheme, styleThemelight, styleThemeDark, styleCss);
    this.container = document.createElement('section');
    this.container.classList.add('jhoonsa-videos-container');
    // this.container = createTemplate(template);
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(this.container);
    this.videos = [];
  }

  static get observedAttributes() {
    return ['videos'];
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
    }
  }

  render() {

    this.container.innerHTML = '';
    this.videos.forEach((video) => {
      const [url, title] = video;
      const videoDiv = document.createElement('div');
      videoDiv.classList.add('jhoonsa-videos');
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
