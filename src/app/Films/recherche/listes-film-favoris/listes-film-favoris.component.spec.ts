import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesFilmFavorisComponent } from './listes-film-favoris.component';

describe('ListesFilmFavorisComponent', () => {
  let component: ListesFilmFavorisComponent;
  let fixture: ComponentFixture<ListesFilmFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesFilmFavorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesFilmFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
