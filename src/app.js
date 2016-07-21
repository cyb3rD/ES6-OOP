import $ from 'jquery';
/**
 * Business logic classes
 */
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './pages/home-page.js';
import {CarsPage} from './pages/cars-page.js';
import {DronesPage} from './pages/drones-page.js';
import {MapPage} from './pages/map-page.js';

export class App extends ApplicationBase {

  constructor() {
    super('Vehicles fleet manager');
    this.dataService = new FleetDataService(fleet);
    this.dataService.loadData(fleet);

    // Routes
    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', new DronesPage());
    this.addRoute('Map', new MapPage());
  }

}

// All web pages can import app and have access to global object
export let app = new App();
app.show($('.container'));