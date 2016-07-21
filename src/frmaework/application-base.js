import {TitleBar} from './ui/title-bar.js';

/**
 * Main application object
 * All shared functionality
 */
export class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.titleBar = new TitleBar(this.title);
  }
}