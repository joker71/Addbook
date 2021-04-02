import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookserviceService } from '../service/bookservice.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  @Input() book:any;
  
  form: any;
  
  constructor(private bookSer: BookserviceService) { }

  ngOnInit(): void {
    // this.bookSer.getBookByID(this.idbook).subscribe(data=>{
    //   this.book= data;
    //   console.log(this.book)
    // })
    console.log(this.book);
    this.form = new FormGroup({
      bookname: new FormControl(this.book.bookname),
      img: new FormControl(this.book.img),
      author: new FormControl(this.book.author),
      price: new FormControl(this.book.price),
      nxb: new FormControl(this.book.nxb),
      yearnxb: new FormControl(this.book.yearnxb),
      nopage: new FormControl(this.book.nopage),
      des: new FormControl(this.book.des),
      norating: new FormControl(0),
      rating: new FormControl(0)
    })

  }
  onSubmit(formdata: any)
  {
    console.log(this.form.value)
    console.log(formdata);
    this.bookSer.updateBook(this.book.bookid, formdata).subscribe();
  }

}
