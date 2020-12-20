import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/Services/filmService';
import {Film} from '../../Classes/Film';




@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {
/*
  private _selected: any = null;

  @Input()
  set selected(selected: any) {
    this._selected = selected;

    if (selected) {
      this.getCredits(this._selected.id);
    }
  }
  get selected() {
    return this._selected;
  }
  film: Film = null;
*/

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }
  /*
  getCredits(filmid: number) {
    this.filmService.getCredits(filmid)
      .then(data => {
        this.film = new Film();

        this.movie.original_title = this.selected.original_title;
        this.movie.release_date = this.selected.release_date;
        this.movie.overview = this.selected.overview;
        this.movie.vote_averagge = this.selected.vote_average;
        this.movie.vote_count = this.selected.vote_count;
        this.movie.popularity = this.selected.popularity;
        this.movie.poster_path = this.selected.poster_path;
        this.movie.crew_list = data.crew.map(map => {
          let crew = <Crew>({
            name: map.name,
            job: map.job
          })
          return crew;
        })
        this.movie.cast_list = data.cast.map(map => {
          let cast = <Cast>({
            name: map.name,
            character: map.character,
            profile_path: map.profile_path
          })
          return cast;
        })
      })
  }
*/
}
