import {Component, Input, OnInit} from '@angular/core';
import {SelectType} from './enums/SelectType';

@Component({
  selector: 'app-universal-table',
  templateUrl: './universal-table.component.html',
  styleUrls: ['./universal-table.component.css']
})

export class UniversalTableComponent implements OnInit {
  @Input() hidden = false;
  @Input() displayedColumns = [];
  @Input() dataSource: any[] = [];
  // _Selection_______________________________________________________________________________
  @Input() selectType: SelectType = SelectType.single;
  selectColumn: { key: string | number, display: string | number } = {
    key: 'select', display: 'select'
  };
  // _Number__________________________________________________________________________________
  @Input() isShowingNumber = false;
  @Input() numberTitle: string;
  numberColumn: { key: string | number, display: string | number } = {
    key: '#', display: '#'
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
    this.sliceStart = (this.isShowingNumber ? 1 : 0) + (this.selectType !== SelectType.none ? 1 : 0);
    // console.warn(this.sliceStart);
    // this.sliceEnd = this.displayedColumns.length - 1;
  }

  getKeysFromDC(displayedColumns: any[]): string[] {
    return displayedColumns
      .map( (dc) => dc.key );
  }
}

