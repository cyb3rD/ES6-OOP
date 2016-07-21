import {BaseElement} from './base-element.js';

export class TitleBar extends BaseElement {

  constructor(title) {
    super();
    this.title = title;
    this.links = [];
  }

  addLink(title, href) {
    // new ES6 feature: object property name to be the same as the variable name
    this.links.push({
      title,
      href
    });
  }

  getElementString() {
    let links = [];
    for (let link of this.links) {
      links += `<li><a href="${link.href}">${link.title}</a></li>
      `;
    }

    console.log()
    return `
      <header class="main-header">
        <div class="app-title">
          <!-- Title -->
          ${this.title}
        </div>
        <ul class="nav">
          ${links}
        </ul>
      </header>
      <div id="app">
      </div>
    `;
  }

}