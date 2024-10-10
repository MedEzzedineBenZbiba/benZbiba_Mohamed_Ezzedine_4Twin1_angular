import { Category } from "./category";

export class Product {
    id: number;
    name: string;
    category: Category;
    quantity: number;
    price: number;
    picture: string;
    description: string
}