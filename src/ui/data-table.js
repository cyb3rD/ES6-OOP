import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {

  constructor(headers, data) {
    super();
    this.headers = headers;
    this.data = data;
  }

  getElementString() {

    let theader = "";
    // Generate table headers
    for (let header of this.headers) {
      theader += `
      <th class="mdl-data-table__cell--non-numeric">${header}</th>
      `;
    }

    let tbody = "";
    // Generate table data
    // Loop through data
    for (let row of this.data){
      tbody += "<tr>";
      let td = "";
      // Inside each row loop through headers
      for (let prop of this.headers) {
        prop = prop.toLowerCase();
        // using headers to get data
        let field = row[prop.toLowerCase()];
        // Add table data
        tbody += `<td class="mdl-data-table__cell--non-numeric">${field}</td>`;
      }
      tbody +="</tr>";
    }
    
    return `
    <div class="vehicles-table-wrapper">
      <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp vehicles-table">
        <thead>
          <tr>
            ${theader}
          </tr>
        </thead>
        <tbody>
          ${tbody}
        </tbody>
      </table>
    </div>
    `;
  }

}