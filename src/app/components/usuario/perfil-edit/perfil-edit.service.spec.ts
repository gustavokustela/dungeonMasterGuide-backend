import { TestBed, inject } from '@angular/core/testing';

import { PerfilEditService } from './perfil-edit.service';

describe('PerfilEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfilEditService]
    });
  });

  it('should be created', inject([PerfilEditService], (service: PerfilEditService) => {
    expect(service).toBeTruthy();
  }));
});
