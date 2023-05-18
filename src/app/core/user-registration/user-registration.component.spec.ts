import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationComponent } from './user-registration.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
class MockEmployeeService {
  createEmployee(){
    return of({})
  }
}
class MockDialogService {
  openConfirmationDialog(){
    return {
      afterClosed(){
        return of ({true:true})
      }
    }
  }
}
fdescribe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationComponent],
      providers: [
        { provide: EmployeeService, useClass: MockEmployeeService },
        { provide: DialogService, useClass: MockDialogService },
      ],
      imports:[
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        MatIconModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    component.employee_detail= new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      hobbies: new FormArray([]),
    });
    component.createArray();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should remobve array', () => {
    component.removeArray(1);
    expect(component.removeArray).toBeTruthy();
  });
  it('should cancel', () => {
    component.cancel();
    expect(component.cancel).toBeTruthy();
  });

  it('should create call submit', () => {
component.formInit();
    component.employee_detail.setValue({
      name: "psvel",
      email:"psveheh",
      phone: "567890",
      address: "hasdjhjsah",
      dateOfBirth:"6276",
      hobbies:[
        {
          hobbie:"jnfskns"
            }
      ]
    });
    component.onSubmit();
    expect(component.ngOnInit).toBeTruthy();

    }

)
  });

