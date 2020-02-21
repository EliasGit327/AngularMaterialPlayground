import {Component, Input, OnInit} from '@angular/core';

enum SearchInputType {
  string,
  number,
  date,
  boolean
}

class SearchInput {
  key: string;
  display: string;
  type: SearchInputType;
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})

export class AdvancedSearchComponent implements OnInit {
  @Input() public inputs: SearchInput[] = [
    {key: 'stringTest', display: 'String Test', type: SearchInputType.string},
    {key: 'numberTest', display: 'Number Tests', type: SearchInputType.number},
    {key: 'dateTest', display: 'Date Tests', type: SearchInputType.date},
    {key: 'booleanTest', display: 'Boolean Tests', type: SearchInputType.boolean}
  ];
  boolSelectOptions: { value: boolean | null, viewValue: string }[] = [
    {value: null, viewValue: 'None'},
    {value: true, viewValue: 'True'},
    {value: false, viewValue: 'False'}
  ];
  response: any = {};

  constructor() {
    // this.prepareNgModelForInputs();
  }

  prepareNgModelForInputs(): void {
    if (this.inputs) {
      this.inputs.forEach(input => {
        switch (input.type) {
          case SearchInputType.string:
            this.response[input.key] = '';
            break;
          case SearchInputType.number:
            this.response[input.key] = '';
            break;
          case SearchInputType.date:
            this.response[input.key] = '';
            break;
        }
      });
    }
  }

  ngOnInit() {
  }

  getData() {
    this.removeParamsFromResponse();
    console.warn(this.response);
  }

  removeParamsFromResponse(): any {
    this.inputs.forEach( (input: SearchInput) => {
      if (this.response[input.key] === '' || this.response[input.key] === null || this.response[input.key] === undefined) {
        delete this.response[input.key];
      }
    });
  }
}
