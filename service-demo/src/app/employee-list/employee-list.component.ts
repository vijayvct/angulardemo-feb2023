import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  public employees:any=[]

  constructor(private _employeeservice:EmployeeService){}

  ngOnInit():void{
    //this.employees=this._employeeservice.loadEmployeeData()
    this._employeeservice.loadEmployeeData().subscribe(data=>this.employees=data)
  }
}
