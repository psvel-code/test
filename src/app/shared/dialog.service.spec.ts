import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
class MockMatDialog{
open(){
  return true
}
}
fdescribe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:MatDialog,useClass:MockMatDialog}]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    service.openConfirmationDialog("hgjgb");
    expect(service).toBeTruthy();
  });
});
