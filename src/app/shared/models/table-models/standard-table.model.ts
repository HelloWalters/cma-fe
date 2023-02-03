export interface StandardTableModel {
  context?: any;
  expandedProp?: string;
  expandedTemplate?: any;
  hasSyntaxHighlighting?: boolean;
  isDefaultColumns?: boolean;
  isDisabled?: boolean;
  isHeaderIcon?: boolean;
  isSortable: boolean;
  name: string;
  prop: string;
  selectionDisabled?: boolean;
  styleOptions?: { width?: string };
  template?: any;
  templateHeader?: any;
}
