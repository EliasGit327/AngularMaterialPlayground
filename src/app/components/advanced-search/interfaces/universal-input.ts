import {DataType} from '../enums/data-type';
import {SelectionOptions} from './selection-options';

export interface UniversalInput {
  key: string;
  display: string;
  type: DataType;
  selectOptions?: SelectionOptions[];
}
