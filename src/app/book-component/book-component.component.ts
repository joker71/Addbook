import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BookserviceService } from "../service/bookservice.service"
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {
  bookOut: any;
  id: any;
  nextcom: any = "bookContainer";
  constructor(private bookService: BookserviceService ){}
  bookList: any=[];
  ngOnInit(): void {
    this.bookService.getBook().subscribe(data=>{
      this.bookList= data;
    })
  }
  DirectFunction(nextcom: any, idIn: any){
    this.nextcom = nextcom;
    this.id = idIn;
  }

}
