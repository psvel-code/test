import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { of } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class MockEmployeeService {
  getEmployee(){
    return of({})
  }
}
fdescribe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      providers:[
        {provide:EmployeeService,useClass:MockEmployeeService}
      ],
      imports:[
        MatPaginatorModule,
        MatTableModule ,
        BrowserAnimationsModule     ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    component.ngAfterViewInit();
    expect(component).toBeTruthy();
  });
});
