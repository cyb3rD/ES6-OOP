import {BaseElement} from './base-element.js';

export class Image extends BaseElement {

  constructor(filename) {
    super();
    this.filename = filename;
  }

  getElementString() {
    return `<div class="vehicle-img">
      <img src="${this.filename}" class="drone-photo" />
    </div>
    <div id="buttons"></div>`;
  }

}