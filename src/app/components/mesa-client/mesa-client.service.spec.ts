import { TestBed, inject } from '@angular/core/testing';

import { MesaClientService } from './mesa-client.service';

describe('MesaClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesaClientService]
    });
  });

  it('should be created', inject([MesaClientService], (service: MesaClientService) => {
    expect(service).toBeTruthy();
  }));
});
