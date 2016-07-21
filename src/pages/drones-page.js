import {Page} from '../framework/page.js';
import {DataTable} from '../ui/data-table.js';
import {app} from '../app.js';

export class DronesPage extends Page {
  
  constructor() {
    super('Drones');
  }

  createElement() {
    super.createElement();

    let headers = "License airTimeHours Model Base".split(" ");
    let datatable = new DataTable(headers, app.dataService.drones, "Drones Data");
    datatable.appendToElement($('#app'));
  }

  getElementString() {
    return '';
  }
}