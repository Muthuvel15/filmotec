import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesFavouriteFilmsComponent } from './listes-favourite-films.component';

describe('ListesFavouriteFilmsComponent', () => {
  let component: ListesFavouriteFilmsComponent;
  let fixture: ComponentFixture<ListesFavouriteFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesFavouriteFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesFavouriteFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
