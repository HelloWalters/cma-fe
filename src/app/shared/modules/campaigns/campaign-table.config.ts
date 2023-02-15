import { StandardTableModel } from "src/app/shared/models/table-models/standard-table.model"

export const TABLE_COLUMNS: StandardTableModel[] = [
  {
    name: 'Campaign Name',
    prop: 'campaignName',
    isSortable: true,
  },
  {
    name: 'Campaign Description',
    prop: 'campaignDescription',
    isSortable: true,
  },
  {
    name: 'Campaign Tags',
    prop: 'campaignTags',
    isSortable: true,
  },
  {
    name: 'Campaign Theme',
    prop: 'campaignTheme',
    isSortable: true,
  },
  {
    name: 'Campaign ID',
    prop: '_id',
    isSortable: true,
  }
];
