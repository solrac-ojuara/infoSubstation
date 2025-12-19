import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubstation } from './card-substation';

describe('CardSubstation', () => {
  let component: CardSubstation;
  let fixture: ComponentFixture<CardSubstation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubstation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSubstation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
