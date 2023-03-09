import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //fake local data...
  private productUrl = "api/products/products.json";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log(`All:`, JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    // in real world app, we may send the server to some remote logging inferstructure
    // instead of just logging to the command console
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      //The backend returned an unsuccessful responce code.
      // The responce body may contain clues as to what went wrong,
      errorMsg = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMsg);
    return throwError(() => errorMsg);
  }

}
