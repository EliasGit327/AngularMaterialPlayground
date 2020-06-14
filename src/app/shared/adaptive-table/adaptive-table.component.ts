import { Component, Input, OnInit } from '@angular/core';
import { AdaptiveTableColumnType } from "./enum/AdaptiveTableColumnType";

export type AdaptiveTableColumn =
  TextTableColumn | CheckBoxTableColumn | RadioButtonTableColumn | SelectTableColumn | ButtonsTableColumn;

class TableColumn {
  displayName: string;
  key: string;
  type: AdaptiveTableColumnType;
}

class TextTableColumn extends TableColumn {
  type: AdaptiveTableColumnType.Text;
  renderText?: (text: string) => string;
}

class CheckBoxTableColumn extends TableColumn {
  type: AdaptiveTableColumnType.CheckBox;
  values: any[];
  text?: string;
}

class RadioButtonTableColumn extends TableColumn {
  type: AdaptiveTableColumnType.RadioButton;
  value?: any;
  text?: string;
  changeValue: (obj) => void;
}

class SelectTableColumn extends TableColumn {
  type: AdaptiveTableColumnType.Select;
  getValues: (row?: any) => any[];
  onSelectValue?: (obj) => void;
  text?: string;
}

class ButtonsTableColumn extends TableColumn {
  type: AdaptiveTableColumnType.Buttons;
  buttons: TableButton[];
}

interface TableButton {
  name: string;
  onClick: (row) => void;
}

@Component({
  selector: 'app-adaptive-table',
  templateUrl: './adaptive-table.component.html',
  styleUrls: ['./adaptive-table.component.css']
})


export class AdaptiveTableComponent implements OnInit {
  @Input() displayColumns: string[] = [];
  @Input() data: any[] = [];
  @Input() columns: AdaptiveTableColumn[] = [];

  enumTypes = {
    text: AdaptiveTableColumnType.Text,
    checkBox: AdaptiveTableColumnType.CheckBox,
    radioButton: AdaptiveTableColumnType.RadioButton,
    select: AdaptiveTableColumnType.Select,
    buttons: AdaptiveTableColumnType.Buttons
  }

  constructor() {
  }

  ngOnInit() {
  }


  checkRow(row: any, column: CheckBoxTableColumn): boolean {
    return column.values.includes(row);
  }

  checkBoxChange(row: any, column: CheckBoxTableColumn) {
    if (column.values.includes(row)) {
      const indexOfRow = column.values.indexOf(row);
      column.values.splice(indexOfRow, 1);
    } else {
      column.values.push(row);
    }
  }

  radioBtnChange(row: any, column: RadioButtonTableColumn) {
    console.warn(row);
    column.value.assign({a: '12331'});
  }
}
