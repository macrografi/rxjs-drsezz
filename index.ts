import {
  of,
  from,
  fromEvent,
  concat,
  throwError,
  Subject,
  interval
} from "rxjs";
import {
  map,
  filter,
  mergeMap,
  tap,
  catchError,
  take,
  takeUntil,
  multicast,
  refCount,
  publish,
  share
} from "rxjs/operators";
import { Observable } from "rxjs";
import { allBooks, allReaders } from "./data";
import { ajax } from "rxjs/ajax";


const source = of(1, 2, 3, 4, 5);
// transparently log values from source with 'tap'
const example = source.pipe(
  tap(val => console.log(`BEFORE MAP: ${val}`)),
  map(val => val + 10),
  tap(val => console.log(`AFTER MAP: ${val}`))
);

//'tap' does not transform values
//output: 11...12...13...14...15
const subscribe = example.subscribe(val => console.log(val));

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

/*
//OBSERVER OBJECT(subscribing with on Observer)
let myObserver = {
  next: value => console.log(`Value produced: ${value}`),
  error: err => console.log(`ERROR: ${err}`),
  complete: () => console.log(`All done producing values.`)
};

let sourceObservable$ = of("String", 10, true, allReaders[0].name);
sourceObservable$.subscribe(myObserver);
*/

/*
//OBSERVER CALLBACKS(subscribing with on callback)
let sourceObservable$ = of("String", 10, true, allReaders[0].name);

sourceObservable$.subscribe(
  value => console.log(`Value produced: ${value}`),
  err => console.log(`ERROR: ${err}`),
  () => console.log(`All done producing values.`)
);
*/

/*
//CREATING AND USING OBSERVERS
//#region subscribing to observables width OBSERVERS
let books$ = from(allBooks);

let booksObserver = {
  next: book => console.log(`Value produced: ${book.title}`),
  error: err => console.log(`ERROR: ${err}`),
  complete: () => console.log(`All done producing values.`)
};

books$.subscribe(booksObserver);

//#endregion
*/

/*
//MANUALY APPLYING AN OPERATOR
let source$ = of(1, 2, 3, 4, 5);
let doubler = map(value => value * 2);
let doubled$ = doubler(source$);

doubled$.subscribe(value => console.log(value));

//CHANING OPERATORS
let source2$ = of(1, 2, 3, 4, 5);

source$
  .pipe(
    map(value => value * 2),
    filter(mappedValue => mappedValue > 5)
  )
  .subscribe(finalValue => console.log(finalValue));
*/

//CATEGORIES OF OPERATORS
//Transformation
//Filtering
//Combination
//Utility
//Conditional
//Aggregate
//Multicasting
/*
ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET",
  responseType: "json"
})
  .pipe(
    mergeMap(ajaxResponse => ajaxResponse.response),
    filter(filterId => filterId.id > 3),
    tap(oldId => console.log(`tap id: ${oldId.id}`))
  )
  .subscribe(finalValue => console.log(finalValue));
*/

//HANDING ERRORS
/*
ajax({
  url: "/errors/500",
  method: "GET",
  responseType: "json"
})
  .pipe(
    mergeMap(ajaxResponse => ajaxResponse.response),
    filter(filterId => filterId.id > 3),
    tap(oldId => console.log(`tap id: ${oldId.id}`)),
    //catchError(err => of({ title: "AA", author: "BB" })),
    //catchError((err, caught) => caught),
    // catchError(err => {
    //   throw `Something bad happened - ${err.message}`;
    // })
    //catchError(err => {return throwError(err.message)})
  )
  .subscribe(
    finalValue => console.log(`VALUE: ${finalValue.id}`),
    error => console.log(`ERROR: ${error}`)
  );
*/

//STRUCTURE OF AN OPERATOR
//Operator sutructure
/*
function myOperator(config1, config2){
  return function(source$){
    return newObservable$;
  }
}
*/

//manualy aplying an operators
/*
let source$ = of(1, 2, 3, 4, 5);
let doubler = map(value => value * 2);
let doubled$ = doubler(source$);
doubled$.subscribe(
  value => console.log(value)
)
*/
//creating an operator
/*
let source$ = of(1, 2, 3, 4, 5);

function doublerOperator() {
  return map(value => value * 2);
}

source$
  .pipe(doublerOperator())
  .subscribe(finalValue => console.log(finalValue));
*/

//MULTICASTED OBSERVABLES
/*
let subject$ = new Subject();

subject$.subscribe(value => console.log(`Observer 1 :${value}`));
subject$.subscribe(value => console.log(`Observer 2 :${value}`));

subject$.next("Hello");

let source$ = new Observable(subscriber => {
  subscriber.next("Greetings!");
});
source$.subscribe(subject$);
*/
