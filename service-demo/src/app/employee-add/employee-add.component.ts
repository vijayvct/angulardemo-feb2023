import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  public employee=new Employee()

  constructor(private _employeeservice:EmployeeService){}

  addEmployee(){
    this._employeeservice.addEmployeeData(this.employee)
      .subscribe(data=>{console.log(data)})

      alert("Employee Added")
  }
}
