import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {Button} from '../ui/button.js';
import {app} from '../app.js';

export class HomePage extends Page {
  
  constructor() {
    super();
  }

  createElement() {
    super.createElement();

    let img = new Image('../src/images/Drone1.png');
    // img.appendToElement(this.element);
    img.appendToElement($('#app'));

    let btn = new Button('Self Driving Cars');
    // btn.appendToElement(this.element);
    btn.appendToElement($('#buttons'));
    btn.element.click(() => app.activateRoute('Cars'));

    btn = new Button('Drones');
    // btn.appendToElement(this.element);
    btn.appendToElement($('#buttons'));
    btn.element.click(() => app.activateRoute('Drones'));
  }

  getElementString() {
    return '';
  }
}