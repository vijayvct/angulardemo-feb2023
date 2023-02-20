import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo1',
  templateUrl: './directive-demo1.component.html',
  styleUrls: ['./directive-demo1.component.css']
})
export class DirectiveDemo1Component {

  title:string ="ngIf Demo"
  showMe:boolean= false;

}
