import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesFilmsComponent } from './listes-films.component';

describe('ListesFilmsComponent', () => {
  let component: ListesFilmsComponent;
  let fixture: ComponentFixture<ListesFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
