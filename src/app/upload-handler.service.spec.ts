import { TestBed } from '@angular/core/testing';

import { UploadHandlerService } from './upload-handler.service';

describe('UploadHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadHandlerService = TestBed.get(UploadHandlerService);
    expect(service).toBeTruthy();
  });
});
