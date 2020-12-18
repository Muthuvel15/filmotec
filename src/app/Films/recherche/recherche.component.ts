import { Component, OnInit } from '@angular/core';
import { rechercheFilmService } from '../../Services/rechercheService';
import { FilmService2 } from '../../Services/filmService';
import { Film } from '../../Classes/Film';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  title: string;
  films: Film = null;
  errorMsg: string;
 

  constructor(private FilmService: FilmService2, private rechercheFilmService: rechercheFilmService) { }


  getFilm(title: string) {
    this.rechercheFilmService.getfilm(title)
      .then(response => this.films = response.results);
  }
  


/*
  add(mov) {
      this.FilmService.add(mov, myToken).subscribe(data => {
        this.fil = data;
      },
        error => {
          this.errorMsg = 'Already added to favourites';
          mov.invalid = true;
        });
    
  
}*/
  
  ngOnInit(): void {
    
  }

}
