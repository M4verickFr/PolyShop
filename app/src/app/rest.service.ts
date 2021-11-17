import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl;

  constructor(private http: HttpClient) { 
    this.apiUrl = "http://localhost:3000/api/v1/";
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  get(type: string, id: any=null): Observable<any> {

    let url = this.apiUrl + type

    if(id) url += "/" + id;
    
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  create(type: string, data: any): Observable<any> {

    let url = this.apiUrl + type + "/create"

    return this.http.post(url, data, httpOptions).pipe(
      catchError(this.handleError));

  }

  update(type: string, id: any, data: any): Observable<any> {

    let url = this.apiUrl + type + "/update/" + id

    return this.http.put(url, data, httpOptions).pipe(
      catchError(this.handleError));

  }

  delete(type: string, id: any): Observable<any> {

    let url = this.apiUrl + type + "/delete/" + id

    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError));

  }

  getCategoriesByShop(id:any): Observable<any> {

    const apiUrl = "http://localhost:3000/api/v1/shop/" + id + "/categories";

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  getProductsByCategory(id:any): Observable<any> {
  
    const apiUrl = "http://localhost:3000/api/v1/category/" + id + "/products";

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }
}
