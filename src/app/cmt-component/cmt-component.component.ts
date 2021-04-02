import { Component, Input, OnInit } from '@angular/core';
import { CmtseviceService } from '../service/cmtsevice.service'
import {Cmt} from '../model/Cmt'
@Component({
  selector: 'app-cmt-component',
  templateUrl: './cmt-component.component.html',
  styleUrls: ['./cmt-component.component.css']
})
export class CmtComponentComponent implements OnInit {

  @Input() id: any
  cmt: any=[];
  constructor(private cmtSer:CmtseviceService) { }

  ngOnInit(): void {
    this.cmtSer.getCmtByID(this.id).subscribe((data:{})=>{
      this.cmt = data;
    });
    console.log(this.cmt);
  }

}
