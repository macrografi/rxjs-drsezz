import { of, from, fromEvent, concat } from "rxjs";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { allBooks, allReaders } from "./data";
import { ajax } from "rxjs/ajax";

/*INVOKE NEXT-ERROR-COMPLETE*/
/* 
let allBooksObservable$ = new Observable(subscriber => {

  //if err working this error() else next() working next()
  let errVal: Boolean = false;

  if (errVal) {
    subscriber.error("bool is true");
  }

  for (let book of allBooks) {
    subscriber.next(book);
  }
  
  setTimeout(() => {
    subscriber.complete();
  }, 2000);

  return ()=> console.log("fnished!");
});

allBooksObservable$.subscribe(book => console.log(book.title));
*/

/*
//OF
let source1$ = of("String", 10, true, allReaders[0].name);
source1$.subscribe(value => console.log(value));

//FROM
let source2$ = from(allBooks);
source2$.subscribe(value => console.log(value.title));

//CONCAT
concat(source1$,source2$).subscribe(value => console.log(value));
*/

/*
//FORMEVENT
let button = document.getElementById("readersButton");
fromEvent(button, "click").subscribe(event => {
  console.log(event);

  let readersDiv = document.getElementById("readers");
  for (let reader of allReaders) {
    readersDiv.innerHTML += reader.name + "<br>";
  }
});
*/

//OBSERVER OBJECT(subscribing with on Observer)
let myObserver = {
  next: value => console.log(`Value produced: ${value}`),
  error: err => console.log(`ERROR: ${err}`),
  complete: () => console.log(`All done producing values.`)
};

let sourceObservable$ = of("String", 10, true, allReaders[0].name);
sourceObservable$.subscribe(myObserver);
