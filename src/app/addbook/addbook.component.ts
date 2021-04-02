import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../model/Book';
import {  BookserviceService} from "../service/bookservice.service"
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  form: any
  listbook: any=[];
  constructor(private bookService:BookserviceService ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      bookname: new FormControl(),
      img: new FormControl(),
      author: new FormControl(),
      price: new FormControl(),
      nxb: new FormControl(),
      yearnxb: new FormControl(),
      nopage: new FormControl(),
      des: new FormControl(),
      norating: new FormControl(0),
      rating: new FormControl(0)
    })
    //this.getorder();
  }
 
  onSubmit(formdata: any)
  {
    console.log(this.form?.value);
    console.log(formdata);
    
    this.bookService.addBook(formdata).subscribe();
    alert("Bạn đã thêm sách thành công !")
  }

}
