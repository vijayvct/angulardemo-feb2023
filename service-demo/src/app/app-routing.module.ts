import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule,Routes } from "@angular/router"
import { NgModule } from '@angular/core';


const routes:Routes=[
  {path:"",redirectTo:"/employeelist",pathMatch:"full"},
  {path:"employeelist",component:EmployeeListComponent},
  {path:"employeedetails",component:EmployeeDetailsComponent},
  {path:"addemployee",component:EmployeeAddComponent},
  {path:"**",component:PageNotFoundComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
