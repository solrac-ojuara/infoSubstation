import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSubstations } from './consulta-substations';

describe('ConsultaSubstations', () => {
  let component: ConsultaSubstations;
  let fixture: ComponentFixture<ConsultaSubstations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaSubstations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSubstations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
