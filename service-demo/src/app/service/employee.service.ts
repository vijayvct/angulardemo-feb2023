import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL:string="https://ct-testapi-02.azurewebsites.net/"

  constructor(private http:HttpClient) { }

  // loadEmployeeData(){
  //   return [
  //     {"id":1,"firstName":"Vijay","lastName":"Vishwakarma","department":"Training","email":"vijay@gmail.com"},
  //     {"id":2,"firstName":"James","lastName":"Chacko","department":"HR","email":"james@gmail.com"},
  //     {"id":3,"firstName":"Scott","lastName":"Hanselman","department":"Engineering","email":"scott@gmail.com"},
  //   ]
  // }

  loadEmployeeData():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseURL+"api/employee")
  }

  addEmployeeData(employee:Employee):Observable<any>
  {
    const header = {'content-type':'application/json'}
    const body = JSON.stringify(employee)

    console.log(body)

    return this.http.post(this.baseURL+"api/employee",body,{'headers':header})
  }
}
