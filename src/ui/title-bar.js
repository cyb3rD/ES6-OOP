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
      //  href="${link.href} removed from the 
      // link to take control of the routes from the onclick event
      links += `<li><a>${link.title}</a></li>
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