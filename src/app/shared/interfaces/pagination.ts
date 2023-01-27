export interface IPagination{
  limit: number;
  offset: number;
}

export const defaultPagination = {
  limit: 15,
  offset: 0
}
