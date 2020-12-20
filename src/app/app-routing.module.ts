import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListesFilmsComponent } from './Films/listes-films/listes-films.component';
import { RechercheComponent } from './Films/recherche/recherche.component';
//import { ListeFavorisFilmComponent } from './Films/liste-favoris-film/liste-favoris-film.component';
//import { ListesFilmFavorisComponent } from './Films/recherche/listes-film-favoris/listes-film-favoris.component';


const routes: Routes = [
  { path: '', redirectTo: '/pageAccuiel', pathMatch: 'full' },
  { path: 'recherche', component: RechercheComponent},
  { path: 'listes-films', component: ListesFilmsComponent},
 // {path: 'liste-favoris-film', component: ListeFavorisFilmComponent},
 // {path: '/listes-film-favoris', component: ListesFilmFavorisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
