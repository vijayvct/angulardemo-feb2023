import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo2',
  templateUrl: './directive-demo2.component.html',
  styleUrls: ['./directive-demo2.component.css']
})
export class DirectiveDemo2Component {

  num :number = 0

  dropdownValue :string=""

  setDropDownValue(data:any):void{
    this.dropdownValue= data.target.value
    console.log(this.dropdownValue)
  }

}
