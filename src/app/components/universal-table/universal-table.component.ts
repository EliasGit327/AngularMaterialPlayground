import {Component, Input, OnInit} from '@angular/core';
import {SelectType} from './enums/SelectType';
import {DisplayColumn} from './classes/display-column';
import {ITableSelector} from './interfaces/itable-selector';

@Component({
  selector: 'app-universal-table',
  templateUrl: './universal-table.component.html',
  styleUrls: ['./universal-table.component.css']
})

export class UniversalTableComponent implements OnInit {
  @Input() hidden = false;
  @Input() displayedColumns: DisplayColumn[] = [];
  @Input() dataSource: any[] = [];

  // _Controller______________________________________________________________________________
  @Input() controller: ITableSelector;

  // _Selection_______________________________________________________________________________
  @Input() selectType: SelectType = SelectType.single;
  selectColumn: DisplayColumn = {key: 'select', display: 'select'};
  mSelectedData: any[] = [];
  sSelectedData: any = {};

  // _Number__________________________________________________________________________________
  @Input() isShowingNumber = false;
  @Input() numberTitle: string;
  numberColumn: DisplayColumn = {key: '#', display: '#'};

  // _Buttons_________________________________________________________________________________
  @Input() buttons: DisplayColumn[] = [
    { key: 'test', display: 'Warn' }
  ];
  @Input() buttonsColumnTitle: string;
  buttonsColumns: DisplayColumn = {
    key: 'buttons', display: 'Buttons'
  };

  // _Slice___________________________________________________________________________________
  sliceStart: number;
  sliceEnd: number;


  constructor() {
  }

  ngOnInit() {
    this.prepareData();
  }

  prepareData(): void {
    if (this.selectType !== SelectType.none) {
      this.displayedColumns.unshift(this.selectColumn);
    }
    if (this.isShowingNumber) {
      this.displayedColumns.unshift(this.numberColumn);
    }
    if (this.buttons.length) {
      this.displayedColumns.push(this.buttonsColumns);
    }
    this.sliceStart = (this.isShowingNumber ? 1 : 0) + (this.selectType !== SelectType.none ? 1 : 0);
    this.sliceEnd = this.displayedColumns.length - (this.buttons.length > 0 ?  1 : 0);
  }

  execButtonAction(button: DisplayColumn, element: any): void {
    switch (button.key) {
      case 'warn': console.log(element); break;
      default: console.warn(`No implementation for '${button.display}' button.`); break;
    }
  }

  getKeysFromDC(displayedColumns: any[]): string[] {
    return displayedColumns
      .map( (dc) => dc.key );
  }

  onSingleSelect(element: any) {
    if (this.controller) {
      this.controller.onSingleSelect(this.dataSource, this.sSelectedData, element);
    }
  }

  onMultipleSelect(element: any) {
    if (this.controller) {
      this.controller.onMultipleSelect(this.dataSource, this.mSelectedData, element);
    }
  }

  contains(element: any): boolean {
    return this.controller ? this.controller.mSelected(this.mSelectedData, element) : false;
  }
}

