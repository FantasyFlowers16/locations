export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface City {
  id: string;
  label: string;
  city: string
}
export interface Category {
  name: string;
  'text_color': string;
  image: string;
  slug: string;
  id: number;
}

export interface CategoryItem {
  slug: string;
  name: string;
  'comment_name': string;
  price: string;
  available: boolean;
  allowed: boolean;
  tags: Category[] | null;
}

export interface ResponseType {
  [k: string]: any; //eslint-disable-line
}
