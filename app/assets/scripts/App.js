var
  $ = require('jquery')
;

import Person from './modules/Person.js';

class Adult extends Person {
  payTaxes() {
    // here we can add everything unique to Jane, using class extends
    console.log(this.name + " now owes $0 in taxes.");
  }
}


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();
