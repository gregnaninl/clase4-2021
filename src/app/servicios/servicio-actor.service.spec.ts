import { TestBed } from '@angular/core/testing';

import { ServicioActorService } from './servicio-actor.service';

describe('ServicioActorService', () => {
  let service: ServicioActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
