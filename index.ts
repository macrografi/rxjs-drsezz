import { of, from } from "rxjs";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { allBooks } from "./data";

let allBooksObservable$ = new Observable(subscriber => {
  for (let book of allBooks) {
    subscriber.next(book);
  }
});

allBooksObservable$.subscribe(book => console.log(book));
