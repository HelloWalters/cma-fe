export interface Pagination {
  count: number;
  limit: number;
  offset: number;
}

export interface CurrentPaginationStatus {
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex: number;
}
