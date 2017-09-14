import { TestBed, inject } from '@angular/core/testing';

import { NgxElectronService } from './ngx-electron.service';

describe('NgxElectronService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxElectronService]
    });
  });

  it('should be injected', inject([NgxElectronService], (service: NgxElectronService) => {
    expect(service).toBeTruthy();
  }));
});
