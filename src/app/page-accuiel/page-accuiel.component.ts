import { Component, OnInit } from '@angular/core';
import { FilmService2 } from '../Services/filmService';

@Component({
  selector: 'app-page-accuiel',
  templateUrl: './page-accuiel.component.html',
  styleUrls: ['./page-accuiel.component.scss']
})
export class PageAccuielComponent implements OnInit {
  
  films: any[];
  totalPages: number;
  pager: any = {}
  currentPage: number;

  constructor(private FilmService2: FilmService2) { }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return
      }
      this.pager = this.FilmService2.getPager(this.totalPages, page);
      this.currentPage = this.pager.currentPage;
      this.FilmService2.getNowPlaying(this.currentPage).subscribe(response => {
          this.films = response
      })
  }



  ngOnInit(): void {
    this.FilmService2.getNowPlaying(1).subscribe(response => {
      this.totalPages = response.total_pages
      this.setPage(1)
  })
  }

}
