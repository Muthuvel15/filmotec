import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class rechercheFilmService {
  constructor(private http: HttpClient) { }

 

  // working
  getfilm(title: string) {
    return fetch(
      environment.baseURL + 'search/movie?query=' + title + '&api_key=' + environment.apiKey
    ).then(response => response.json());
  }

 
/*
 public getMovie1() {
  return this.http.get(environment.baseURL + 'discover/movie?api_key=' + environment.apiKey
   ).then(response => response.json());
}
*/
/*
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  */
}
