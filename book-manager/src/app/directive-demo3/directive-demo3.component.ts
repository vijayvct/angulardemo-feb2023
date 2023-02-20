import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo3',
  templateUrl: './directive-demo3.component.html',
  styleUrls: ['./directive-demo3.component.css']
})
export class DirectiveDemo3Component {

  public people:any[]=[
    {"name":"Malcolm D","country":"UK"},
    {"name":"Vijay","country":"INDIA"},
    {"name":"James","country":"UK"},
    {"name":"Bill","country":"USA"},
    {"name":"Sundar","country":"USA"},
  ]

  getColor(country:string):string{
    switch(country)
    {
      case "UK":
        return "green"

      case "USA":
        return "blue"

      case "INDIA":
        return "red"

      default:
        return "yellow"
    }
  }
}
