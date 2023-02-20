import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form-demo';

  registrationForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(4),
                              Validators.maxLength(25)]),
    contactno : new FormControl(''),
    email : new FormControl(''),
    address :new FormGroup({
      locality : new FormControl(''),
      city:new FormControl(''),
      pincode : new FormControl('')
    })

  })

  loadData(){
    this.registrationForm.setValue({
      name:"Vijay",
      contactno:"29898989",
      email:"vijay@gmail.com",
      address:{
        locality:"airoli",
        city:"Mumbai",
        pincode:"11111"
      }
    })
  }
}
