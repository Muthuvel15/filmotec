import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class rechercheFilmService {
  constructor(private http: HttpClient) { }

  public sendGetRequest(id: string){
    return this.http.get(' https://api.themoviedb.org/3/search/movie?api_key=%27clé_api%27&language=fr&query=' + id);
  }

  // working 
  getfilm(title: string) {
    return fetch(
      environment.baseURL + 'search/movie?query=' + title + '&api_key=' + environment.apiKey
    ).then(response => response.json());
  }



  
/*
  getTrendingMovies() {
    return fetch(
      environment.baseURL + 'trending/movie/week?api_key=' + environment.apiKey
    ).then(response => response.json());
    // return this.http.get(
    //   this.baseURL + 'trending/movie/week?api_key=' + this.apiKey
    // ).pipe(map((response: any) => response.json)
    // );
  }
*/
  getMovie() {
    return fetch(
      environment.baseURL + 'discover/movie?api_key=' + environment.apiKey
    ).then(response => response.json());
  }
  /*
  getFilm(id: string): Observable<any> {
    console.log("url :" + '' + id);
    return this.http.get<Plateau>(urlrest + 'plateaux.php?id=' + id).pipe(
      catchError(this.handleError)
    );
  }
  */
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
