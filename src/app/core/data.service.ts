import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { allBooks, allReaders } from "app/data";
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { BookTrackerError } from "app/models/bookTrackerError";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find((reader) => reader.readerID === id);
  }

  getAllBooks(): Observable<Book[]> {
    console.log("Getting all books from the server");
    return this.http.get<Book[]>("/api/books");
  }

  getBookById(id: number): Book {
    return allBooks.find((book) => book.bookID === id);
  }
}
