import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { MatButtonModule } from '@angular/material/button';

// MatIconModule,

// Toutes les components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListesFilmsComponent } from './Films/listes-films/listes-films.component';
import { RechercheComponent } from './Films/recherche/recherche.component';
import { DetailFilmComponent } from './Films/detail-film/detail-film.component';
import { ListesFavouriteFilmsComponent } from './Films/listes-favourite-films/listes-favourite-films.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageAccuielComponent } from './page-accuiel/page-accuiel.component';



// Service 
import { FilmService2 } from './Services/filmService';
import { rechercheFilmService } from './Services/rechercheService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListesFilmsComponent,
    RechercheComponent,
    DetailFilmComponent,
    ListesFavouriteFilmsComponent,
    HeaderComponent,
    FooterComponent,
    PageAccuielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatButtonModule

  ],
  providers: [FilmService2,rechercheFilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
