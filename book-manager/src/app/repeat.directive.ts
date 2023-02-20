import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  private repeactcount:number =0

  constructor(private viewcontainer:ViewContainerRef,
              private templateref:TemplateRef<any>) { }


  @Input()
  public set appRepeat(value:number)
  {
      this.repeactcount=value;

      //remove the previous element
      this.viewcontainer.clear()

      //logic to clone the elements
      for(let i=0;i<this.repeactcount;i++)
      {
        this.viewcontainer.createEmbeddedView(this.templateref)
      }
  }

  public get appRepeat():number{
    return this.repeactcount
  }

}
