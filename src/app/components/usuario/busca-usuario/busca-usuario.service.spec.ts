import { TestBed, inject } from '@angular/core/testing';

import { BuscaUsuarioService } from './busca-usuario.service';

describe('BuscaUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscaUsuarioService]
    });
  });

  it('should be created', inject([BuscaUsuarioService], (service: BuscaUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
