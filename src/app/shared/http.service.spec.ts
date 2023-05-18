import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
class MockHttpClient{
  getMethod(){
    return of ({})
  }
  postMethod(){
    return of ({})

  }
}
fdescribe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:HttpClient,useClass:MockHttpClient}]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get method', () => {
    service.getMethod("fghj");
    expect(service.getMethod).toBeTruthy();
  });
  it('should post method', () => {
    service.postMethod("kfnk","jheqjhn");
    expect(service.getMethod).toBeTruthy();
  });
});
