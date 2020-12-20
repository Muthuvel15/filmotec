import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../Classes/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFavouriteList(user: string): Observable<any> {
    return this.http.get<any>(environment.localUrl + '/' + user);
  }

  deleteMovie(id: number, user: string) {
    const delURL = environment.localUrl + '/' + user + '/' + id;
    return this.http.delete(delURL).subscribe(
      data => {
        console.log(data);
      });
  }

    
  getMovie() {
    return fetch(
      environment.baseURL + 'discover/movie?api_key=' + environment.apiKey
    ).then(response => response.json());
  }

  Addfilm(film: Film, user: string): Observable<Film> {
    return this.http.post<Film>(environment.localUrl + '/' + user, film);
  }
}
