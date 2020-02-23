import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectionOptions} from './interfaces/selection-options';
import {UniversalInput} from './interfaces/universal-input';
import {DataType} from './enums/data-type';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})

export class AdvancedSearchComponent implements OnInit {
  @Output() eventForButton = new EventEmitter<any>();
  @Input() public inputs: UniversalInput[] = [];
  // _Reference_for_html_of_Enums_values_____________________________________________________________________________________
  private enumVariants = {
    string : DataType.string,
    number : DataType.number,
    date : DataType.date,
    boolean : DataType.boolean,
    select  : DataType.select
  };
  // _Boolean_options_for_select_____________________________________________________________________________________________
  boolSelectOptions: SelectionOptions[] = [
    {value: null, viewValue: 'None'},
    {value: true, viewValue: 'True'},
    {value: false, viewValue: 'False'}
  ];
  // _Object_for_response____________________________________________________________________________________________________
  response = {};

  constructor() {}
  ngOnInit() {}

  buttonClick() {
    this.removeParamsFromResponse();
    this.eventForButton.emit(this.response);
  }
  // _This_method_clears_response_object_from_empty_string,_null_and_undefined_parameters____________________________________
  removeParamsFromResponse(): any {
    this.inputs.forEach( (input: UniversalInput) => {
      if (this.response[input.key] === '' || this.response[input.key] === null || this.response[input.key] === undefined) {
        delete this.response[input.key];
      }
    });
  }
}
