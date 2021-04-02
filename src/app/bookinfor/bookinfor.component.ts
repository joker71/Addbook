import { Component, Input, OnInit } from '@angular/core';
import { BookserviceService } from "../service/bookservice.service"
@Component({
  selector: 'app-bookinfor',
  templateUrl: './bookinfor.component.html',
  styleUrls: ['./bookinfor.component.css']
})
export class BookinforComponent implements OnInit {
  @Input() id: any;
  constructor(private bookService: BookserviceService) { }
  book: any ;

  ngOnInit(): void {
    this.bookService.getBookByID(this.id).subscribe(data=>{
      this.book=data;
    })
    
  }

}
