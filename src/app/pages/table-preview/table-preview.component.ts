import { Component, OnInit } from '@angular/core';
import {TableExampleService} from './table-example.service';

@Component({
  selector: 'app-table-preview',
  templateUrl: './table-preview.component.html',
  styleUrls: ['./table-preview.component.css']
})
export class TablePreviewComponent implements OnInit {

  constructor(
    private tableExampleService: TableExampleService
  ) { }

  ngOnInit() {
  }
}
