import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public name:string ="Vijay";
  public empid:number = 2345;
  public imagepath:string="assets/angularlogo.png"

  public GetDetails():string{
    return this.empid+" , "+this.name
  }

  public ChangeName():void{
    this.name="Malcolm"
  }

  clickCount=0

  public clickMe():void{
    this.clickCount++
  }

  public Change(event:any):void{

    if(event.target.id=="btn1")
    {
      this.name="James";
      console.log("Change Name Button is clicked.....");
    }

    if(event.target.id=="btn2")
    {
      this.empid=2982
      console.log("Change Id Button is clicked........")
    }
  }

  public ProcessEmployeeInfo(city:any):void{
    console.log("City is "+city)
  }
}
