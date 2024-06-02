import { Product } from "./Product";

export type Category = {
  id: number;
  name: string;
  parent_id?: string;
  products?: Product[]
  icon: string
  children?: Category[];
  subcategories: {
    id: number
    name: string
  }[]
};
