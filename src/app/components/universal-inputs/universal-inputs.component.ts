import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-universal-inputs',
  templateUrl: './universal-inputs.component.html',
  styleUrls: ['./universal-inputs.component.css']
})
export class UniversalInputsComponent implements OnInit {
  @Input() inputs: { key: string, display: string,  type: string, additional?: string}[] = [
    { key: 'userName', display: 'User name', type: 'textInput' },
    { key: 'userName', display: 'User name', type: 'textInput', additional: 'hiddenText' }
  ];
  inputValues: any = [];

  constructor() {
    this.inputs.forEach( (input) => {
      switch (input.type) {
        case 'textInput': this.inputValues[input.key] = ''; break;
      }
    });
  }

  ngOnInit() {
  }

  warnData() {
    console.warn(this.inputValues);
  }
}
