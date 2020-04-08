export class Book {
    id: number;
    name: string;
    autor: string;
}

export interface BookEmbeddedResponse {
    _embedded: {
      book: Book[];
    }
}
