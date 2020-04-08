export class Category {
    id: number;
    name: string;
}

export interface CategoryEmbeddedResponse {
    _embedded: {
        category: Category[];
    }
}
