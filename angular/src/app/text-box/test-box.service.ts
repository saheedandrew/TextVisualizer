import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry,  } from 'rxjs/operators';
import { throwError, concat, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TestBoxService {

  private httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
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
    return throwError(
      'Something bad happened; please try again later.');
  };





  private requestUrl = "https://vvlearning-1568432045227.appspot.com/_analyze" ;


 

  constructor(private http : HttpClient) { }



  getImage(text2 : Text): Observable<JSON>{
    console.log(this.requestUrl);
    return this.http.post<JSON>(this.requestUrl,text2,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  



}
