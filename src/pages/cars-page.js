import {Page} from '../framework/page.js';
import {DataTable} from '../ui/data-table.js';
import {app} from '../app.js';

export class CarsPage extends Page {
  
  constructor() {
    super('Cars');
  }

  createElement() {
    super.createElement();

    let headers = "License Make Model Miles".split(" ");
    let datatable = new DataTable(headers, app.dataService.cars, "Cars Data");
    datatable.appendToElement($('#app'));
  }

  getElementString() {
    return '';
  }
}