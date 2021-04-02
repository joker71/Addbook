import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  CreatComentComponent } from './creat-coment/creat-coment.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { BookserviceService } from "./service/bookservice.service"
import { BookComponentComponent } from './book-component/book-component.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderBookComponent } from './header-book/header-book.component';
import { BookinforComponent } from './bookinfor/bookinfor.component';
import { CmtComponentComponent } from './cmt-component/cmt-component.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    HeaderBookComponent,
    BookinforComponent,
    CmtComponentComponent,
    CreatComentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
