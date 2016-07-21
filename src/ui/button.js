import {BaseElement} from './base-element.js';

export class Button extends BaseElement {

  constructor(title) {
    super();
    this.title = title;
  }

  getElementString() {
    // using ES6 templates feature
    return `<button class="btn">${this.title}</button>`;
  }

}