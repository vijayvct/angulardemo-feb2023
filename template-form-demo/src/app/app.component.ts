import { Contact } from './contact';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-form-demo';

  public contactModel = new Contact("James","Chacko",'98982829','james@gamil.com')

  onSubmit()
  {
    alert("Form Submitted")
  }
}
