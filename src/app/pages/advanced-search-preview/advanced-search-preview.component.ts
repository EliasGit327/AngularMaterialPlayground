import { Component, OnInit } from '@angular/core';
import {UniversalInput} from '../../components/advanced-search/interfaces/universal-input';
import {DataType} from '../../components/advanced-search/enums/data-type';

@Component({
  selector: 'app-advanced-search-preview',
  templateUrl: './advanced-search-preview.component.html',
  styleUrls: ['./advanced-search-preview.component.css']
})
export class AdvancedSearchPreviewComponent implements OnInit {
  inputs: UniversalInput[] = [
    {key: 'stringTest', display: 'String Test', type: DataType.string},
    {key: 'numberTest', display: 'Number Tests', type: DataType.number},
    {key: 'dateTest', display: 'Date Tests', type: DataType.date},
    {key: 'booleanTest', display: 'Boolean Tests', type: DataType.boolean},
    {key: 'selectionTest', display: 'Select Options Tests', type: DataType.select,
      selectOptions: [{value: 'a1', viewValue: 'A1'}, {value: 'a2', viewValue: 'A2'}]}
  ];

  constructor() { }
  ngOnInit() {}

  showData(response: any) {
    console.warn(response);
  }
}
