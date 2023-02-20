import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  public books:any=[]

  public id:number=-1

  public LoadDataFromServer()
  {
    //Simulation for loading data

    this.books=[ {bookid:1,bookname:"Pro Angular",publisher:"APress",author:"James",price:999.99},
    {bookid:2,bookname:"AZ-305 Azure Architect",publisher:"Microsoft",author:"Bill",price:2999.99},
    {bookid:3,bookname:"Asp.NET Core MVC",publisher:"Wrox",author:"Scott H",price:799.99},
    ]
  }

  public GetBookInfo(id:any):void{
    console.log("Selected Book id is : "+id)
    this.id=id
  }

  public GetBook(book:any):void{
    console.log("Selected Book : "+book)
  }

  ngOnInit():void{
    this.LoadDataFromServer();
  }

  public RefreshData():void{

    this.LoadDataFromServer()

    this.books.push(
      {bookid:100,bookname:"ABC",publisher:"PQR",author:"XYZ",price:100}
    )
  }

  public TrackBook(index:number,book:any):number
  {
    return book.bookid
  }
}
