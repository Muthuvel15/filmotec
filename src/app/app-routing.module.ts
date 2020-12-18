import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListesFilmsComponent } from './Films/listes-films/listes-films.component';
import { RechercheComponent } from './Films/recherche/recherche.component';
import { PageAccuielComponent } from './page-accuiel/page-accuiel.component';


const routes: Routes = [
  { path: '', redirectTo: '/pageAccuiel', pathMatch: 'full' },
  { path: 'recherche', component: RechercheComponent},
  { path: 'listes-films', component: ListesFilmsComponent},
  { path: 'pageAccuiel', component: PageAccuielComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
