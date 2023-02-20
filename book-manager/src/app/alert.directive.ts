import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {

  @Input()
  public inputmessage:string=""

  constructor(private hostElement:ElementRef) { }

  ngOnInit(){
    console.log(this.hostElement)
  }

  @HostListener('click')
  public DisplayAlert():void{
    //alert("Hello Directive")
    // let message = this.hostElement.nativeElement.innerText;
    // console.log(message)
    // alert(message)
    alert(this.inputmessage)
  }

  //creating a getter and setter
  @Input()
  public set appAlert(value:string){
    this.inputmessage= value
  }

  public get appAlert():string{
    return this.inputmessage
  }
}
