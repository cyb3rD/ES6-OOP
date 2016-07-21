import $ from 'jquery';
/**
 * Business logic classes
 */
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';

export class App extends ApplicationBase {

  constructor() {
    super('Vehicles fleet manager');
    this.dataService = new FleetDataService(fleet);
    this.dataService.loadData(fleet);

    // Routes
    this.addRoute('Home', null, true);
    this.addRoute('Cars', null);
    this.addRoute('Drones', null);
    this.addRoute('Map', null);
  }

}

// All web pages can import app and have access to global object
export let app = new App();
app.show($('.container'));