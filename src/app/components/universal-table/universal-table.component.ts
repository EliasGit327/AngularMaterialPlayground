import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-universal-table',
  templateUrl: './universal-table.component.html',
  styleUrls: ['./universal-table.component.css']
})

export class UniversalTableComponent implements OnInit {
  @Input() hidden = false;
  @Input() displayedColumns = [];
  @Input() dataSource: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  getKeysFromDC(displayedColumns: any[]): string[] {
    return displayedColumns
      .map( (dc) => dc.key );
  }


}

