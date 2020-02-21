export interface ITableSelector {
  sSelected(sSelectedElement: any, element: any): boolean;
  mSelected(mSelectedElements: any[], element: any): boolean;
  onMultipleSelect(data: any[], mSelectedElements: any[], element: any);
  onSingleSelect(data: any[], sSelectedElements: any, element: any);
}
