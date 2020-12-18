import { Component, OnInit } from '@angular/core';
import { rechercheFilmService } from '../../Services/rechercheService';


@Component({
  selector: 'app-listes-films',
  templateUrl: './listes-films.component.html',
  styleUrls: ['./listes-films.component.scss']
})
export class ListesFilmsComponent implements OnInit {
  
  films = [];
  constructor(private rechercheFilmService: rechercheFilmService) { }

  ngOnInit(): void {
    this.rechercheFilmService.getMovie()
    .then(response => this.films = response.results);
  }

}
