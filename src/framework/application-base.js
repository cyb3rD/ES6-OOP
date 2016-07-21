import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {

  constructor(title) {
    this.title = title;
    // Routes map in format
    // {id: pageObject}
    this.routeMap = {};
    this.defaultRoute = null;
    
    this.titleBar = new TitleBar(this.title);
  }

  addRoute(id, pageObject, defaultRoute = false) {
    // Pass links to Title Bar
    this.titleBar.addLink(id, '');
    // Keep map of all routes
    this.routeMap[id] = pageObject;

    if (defaultRoute) {
      this.defaultRoute = id;
    }
  }

  activateRoute(route) {
    let content = $('#app');
    content.empty();

    this.routeMap[route].appendToElement(content);
  }
  
  show(element) {
    this.titleBar.appendToElement(element);
    // check for default route and show it
    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }

}