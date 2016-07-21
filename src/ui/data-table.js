import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {

  constructor(headers, data, caption) {
    super();
    this.headers = headers;
    this.data = data;
    this.caption = caption;
  }

  getElementString() {

    let theader = "";
    // Generate table headers
    for (let header of this.headers) {
      theader += `
      <th>${header}</th>
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
        // Don't change case for the propperty airTimeHours
        if(prop !== "airTimeHours") {
          prop = prop.toLowerCase();
        }
        // using headers to get data
        let field = row[prop];
        // Add table data
        tbody += `<td>${field}</td>`;
      }
      tbody +="</tr>";
    }
    
    return `
    <div><h3>${this.caption}</h3></div>
    <div class="vehicles-table-wrapper">
      <table>
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