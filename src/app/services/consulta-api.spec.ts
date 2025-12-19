import { TestBed } from '@angular/core/testing';

import { ConsultaApi } from './consulta-api';

describe('ConsultaApi', () => {
  let service: ConsultaApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
