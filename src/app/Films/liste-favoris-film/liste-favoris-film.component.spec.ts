import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFavorisFilmComponent } from './liste-favoris-film.component';

describe('ListeFavorisFilmComponent', () => {
  let component: ListeFavorisFilmComponent;
  let fixture: ComponentFixture<ListeFavorisFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFavorisFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFavorisFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
