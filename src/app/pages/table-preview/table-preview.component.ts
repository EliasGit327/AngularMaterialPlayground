import { Component, OnInit } from '@angular/core';
import { AdaptiveTableColumn } from "../../shared/adaptive-table/adaptive-table.component";
import { AdaptiveTableColumnType } from "../../shared/adaptive-table/enum/AdaptiveTableColumnType";

@Component({
  selector: 'app-table-preview',
  templateUrl: './table-preview.component.html',
  styleUrls: ['./table-preview.component.css']
})
export class TablePreviewComponent implements OnInit {

  statuses = [
    {value: 0, viewValue: 'Not started'},
    {value: 1, viewValue: 'In process'},
    {value: 2, viewValue: 'Done'}
  ];

  data = [
    { id: 1, name: 'Hydrogen', status: 0, symbol: 'H' },
    { id: 2, name: 'Helium', status: 1, symbol: 'He' },
    { id: 3, name: 'Lithium', status: 2, symbol: 'Li' },
    { id: 4, name: 'Beryllium', status: null, symbol: 'Be' },
    { id: 5, name: 'Boron', status: null, symbol: 'B' },
    { id: 6, name: 'Carbon', status: null, symbol: 'C' },
    { id: 7, name: 'Nitrogen', status: null, symbol: 'N' },
    { id: 8, name: 'Oxygen', status: null, symbol: 'O' },
    { id: 9, name: 'Fluorine', status: null, symbol: 'F' },
    { id: 10, name: 'Neon', status: null, symbol: 'Ne' },
  ];
  selRow = this.data[4];
  selRows = [this.data[0], this.data[3]];

  rules: AdaptiveTableColumn[] = [
    { type: AdaptiveTableColumnType.Text, displayName: 'ID', key: 'id' },
    { type: AdaptiveTableColumnType.CheckBox, displayName: 'Select rows',
      key: 'selRows', values: this.selRows },
    { type: AdaptiveTableColumnType.RadioButton, displayName: 'Select row',
      key: 'selRow', value: this.selRow, changeValue: (row) => { this.selRow = row } },
    { type: AdaptiveTableColumnType.Text, displayName: 'Name', key: 'name' },
    { type: AdaptiveTableColumnType.Select, displayName: 'Status', text: 'Row status',
      key: 'status', getValues: () => this.statuses },
    { type: AdaptiveTableColumnType.Buttons, displayName: 'Actions', key: 'actions', buttons: [
        { name: 'Test', onClick: (row) => {
            console.warn(row)}}, { name: 'Test2', onClick: (row) => {}},
      ]}
  ];
  columnNames = this.rules.map(it => it.key);

  constructor() {
  }

  ngOnInit() {
  }
}
