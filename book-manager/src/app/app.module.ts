import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { DirectiveDemo1Component } from './directive-demo1/directive-demo1.component';
import { DirectiveDemo2Component } from './directive-demo2/directive-demo2.component';
import { DirectiveDemo3Component } from './directive-demo3/directive-demo3.component';
import { AlertDirective } from './alert.directive';
import { RepeatDirective } from './repeat.directive';
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookComponent,
    DirectiveDemo1Component,
    DirectiveDemo2Component,
    DirectiveDemo3Component,
    AlertDirective,
    RepeatDirective,
    SquarePipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
