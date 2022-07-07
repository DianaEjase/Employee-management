import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  Employee: { firstname: string; lastname: string; id: number; Salary: string; jobtitle: string; motto: string; };
  employee: any;


  constructor() {
    this.Employee = {
      firstname: '',
      lastname: '',
      id: 0,
      Salary: '',
      jobtitle: '',
      motto: '',

    };
  }

  ngOnInit(): void {
   
  }

  

}
