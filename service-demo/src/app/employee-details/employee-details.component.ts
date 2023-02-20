import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  public employees:any=[]

  constructor(private _employeeservice:EmployeeService){}

  ngOnInit():void{
    //this.employees=this._employeeservice.loadEmployeeData()
    this._employeeservice.loadEmployeeData().subscribe(data=>this.employees=data)

  }
}
