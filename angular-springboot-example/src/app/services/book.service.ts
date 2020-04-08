import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, BookEmbeddedResponse } from '../common/book';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'http://localhost:8080/api/v1/books';

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<BookEmbeddedResponse>(this.booksUrl).pipe(
      map(res => res._embedded.book)
    );
  }  
}
