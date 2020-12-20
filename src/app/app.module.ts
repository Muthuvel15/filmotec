import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';

// MatIconModule,

// Toutes les components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListesFilmsComponent } from './Films/listes-films/listes-films.component';
import { RechercheComponent } from './Films/recherche/recherche.component';
import { DetailFilmComponent } from './Films/detail-film/detail-film.component';
import { ListeFavorisFilmComponent } from './Films/liste-favoris-film/liste-favoris-film.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListesFilmFavorisComponent } from './Films/recherche/listes-film-favoris/listes-film-favoris.component';

// Service
import { rechercheFilmService } from './Services/rechercheService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FilmService} from './Services/filmService';
import { AuthenticationService } from './Services/authentication.service';



@NgModule({
  declarations: [
    AppComponent,
    ListesFilmsComponent,
    RechercheComponent,
    DetailFilmComponent,
    HeaderComponent,
    FooterComponent,
    ListeFavorisFilmComponent,
    ListesFilmFavorisComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatButtonModule

  ],
  providers: [FilmService, rechercheFilmService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
