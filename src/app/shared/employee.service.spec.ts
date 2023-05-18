import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpService } from './http.service';
import { of } from 'rxjs';
class MockHttpService{
  getMethod(){
    return of ({})
  }
  postMethod(){
    return of ({})
  }
}
fdescribe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:HttpService,useClass:MockHttpService
      }]
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should createEmployee', () => {
service.createEmployee("sjbjsdb")
    expect(service.createEmployee).toBeTruthy();
  });
  it('should getEmployee', () => {
    service.getEmployee()
        expect(service.getEmployee).toBeTruthy();
      });
});
