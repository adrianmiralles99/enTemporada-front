import { TestBed } from '@angular/core/testing';

import { LikesSevice } from './likes.service';

describe('LikesService', () => {
  let service: LikesSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikesSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
