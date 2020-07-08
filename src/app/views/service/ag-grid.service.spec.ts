/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgGridService } from './ag-grid.service';

describe('Service: AgGrid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgGridService]
    });
  });

  it('should ...', inject([AgGridService], (service: AgGridService) => {
    expect(service).toBeTruthy();
  }));
});
