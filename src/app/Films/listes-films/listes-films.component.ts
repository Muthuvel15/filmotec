import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../Services/FilmService';


@Component({
  selector: 'app-listes-films',
  templateUrl: './listes-films.component.html',
  styleUrls: ['./listes-films.component.scss']
})
export class ListesFilmsComponent implements OnInit {
  
  films = [];
  constructor(private FilmService2 : FilmService) { }

  ngOnInit(): void {
    this.FilmService2.getMovie()
    .then(response => this.films = response.results);
    console.log(this.films);
  }
  
  

}
