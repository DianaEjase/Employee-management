import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { Employee } from './services/models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('fileInput') fileInput:  any;

  title = 'Angularproject';

  employeeForm: FormGroup;

  employees: Employee[];
  employeesToDisplay: Employee[];


  constructor(
    private fb: FormBuilder, 
    private employeeService: EmployeeService 
    ) {
      this.employeeForm = fb.group({});
      this.employees =[];
      this.employeesToDisplay = this.employees;
    }


  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      id: this.fb.control(''),
      salary: this.fb.control(''),
      jobtitle: this.fb.control(''),
      motto: this.fb.control(''),
    });
    this.employeeService.getEmployees().subscribe(res => {
      for (let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    });
  }

  ngAfterViewInit(): void {
    //this.buttontemp.nativeElemet.click();
  }

  addEmployee(){
    let employee: Employee ={
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      id: this.ID.value,
      jobtitle: this.Jobtitle.value,
      salary: this.Salary.value,
      motto: this.Motto.value,
    }
    this.employeeService.postEmployee(employee).subscribe((res) => {
      this.employees.unshift(res);
      this.clearForm();
    });
  }


  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.ID.setValue('');
    this.Jobtitle.setValue('');
    this.Salary.setValue('');
    this.Motto.setValue('');
    this.fileInput.nativeElement.value = '';
  }


  public get FirstName(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get ID(): FormControl {
    return this.employeeForm.get('id') as FormControl;
  }
  public get Jobtitle(): FormControl {
    return this.employeeForm.get('jobtitle') as FormControl;
  }
  public get Salary(): FormControl {
    return this.employeeForm.get('salary') as FormControl;
  }
  public get Motto(): FormControl {
    return this.employeeForm.get('motto') as FormControl;
  }
  
 
}
