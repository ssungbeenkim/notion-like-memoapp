import { BaseComponent } from '../../Component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
              <div class="video__player">  
              <iframe class="video__iframe"></iframe>
              </div>
              <h3 class="page-item__title video__title"></h3>
            </section>`);
        const iframe = this.element.querySelector('.video__iframe');
        iframe.src = this.convertToEmbeddedURL(url);
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
    convertToEmbeddedURL(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.?be)(?:(?:\.com|\/)\/?)(?:watch\?)?(?:v=)?([a-zA-Z0-9]{11})/;
        const match = url.match(regex);
        const videoId = match ? match[1] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        else {
            return url;
        }
    }
}
