import { Privilege } from 'src/app/shared/types/privilege';

export interface Role {
  name?: string;
  code?: string;
  description?: string;
  privileges?: Array<Privilege>; 
  role_category?: RoleCategory;
}

export interface RoleCategory {
  id?: number;
  name?: string;
}

export interface RolePagination {
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  sort: RoleSort;
  number_of_elements: number;
  total_pages: number;
  total_elements: number;
}

export interface RoleSort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

  