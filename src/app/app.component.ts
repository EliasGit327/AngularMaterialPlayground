import {Component} from '@angular/core';
import {DataType} from './components/advanced-search/enums/data-type';
import {UniversalInput} from './components/advanced-search/interfaces/universal-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterialPlayground';
  inputs: UniversalInput[] = [
    {key: 'stringTest', display: 'String Test', type: DataType.string},
    {key: 'numberTest', display: 'Number Tests', type: DataType.number},
    {key: 'dateTest', display: 'Date Tests', type: DataType.date},
    {key: 'booleanTest', display: 'Boolean Tests', type: DataType.boolean},
    {key: 'selectionTest', display: 'Select Options Tests', type: DataType.select,
      selectOptions: [{value: 'a1', viewValue: 'A1'}, {value: 'a2', viewValue: 'A2'}]}
  ];

  constructor() {
  }

  showData(response: any) {
    console.warn(response);
  }
}
