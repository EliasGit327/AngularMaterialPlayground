import { Injectable } from '@angular/core';
import {ITableSelector} from '../../components/universal-table/interfaces/itable-selector';
import {SelectType} from '../../components/universal-table/enums/SelectType';

@Injectable({
  providedIn: 'root'
})
export class TableExampleService implements ITableSelector {
  constructor() { }

  ELEMENT_DATA: any[] = [
    {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {name: 'Helium', weight: 4.0026, symbol: 'He'},
    {name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {name: 'Boron', weight: 10.811, symbol: 'B'},
    {name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns = [
    {key: 'name', display: 'Name'},
    {key: 'weight', display: 'Weight'},
    {key: 'symbol', display: 'Symbol'}
  ];
  selectType = SelectType.multiple;

  buttons: { key: string | number, display: string | number}[] = [{
    key: 'warn',
    display: 'Console Warn'
  }];

  sSelected(sSelectedElement: any, element: any): boolean {
    return element === sSelectedElement;
  }

  mSelected(mSelectedElements: any[], element: any): boolean {
    return mSelectedElements.includes(element);
  }

  onMultipleSelect(data: any[], mSelectedElements: any[], element: any) {
    const index = mSelectedElements.indexOf(element);
    const has = data.includes(element);
    has ? mSelectedElements.slice(index, 0) : mSelectedElements.push(element);
  }

  onSingleSelect(data: any[], sSelectedElements: any[], element: any) {
    sSelectedElements = element;
  }

}
