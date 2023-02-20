import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input()
  public bookinfo:any

  @Input()
  public bookindex:any

  @Input()
  public odd:any
  @Input()
  public even:any

  @Output()
  public bookselection:EventEmitter<number>=
              new EventEmitter<number>();
  @Output()
  public bookobjectselection:EventEmitter<any>=new EventEmitter<any>()


  public GenerateNotification():void{
    this.bookselection.emit(this.bookinfo.bookid)
  }

  public GenerateBookNotification():void{
    this.bookobjectselection.emit(this.bookinfo.bookname)
  }
}
