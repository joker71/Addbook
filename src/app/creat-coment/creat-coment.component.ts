import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Cmt } from '../model/Cmt';
import { CmtseviceService } from '../service/cmtsevice.service';
@Component({
  selector: 'app-creat-coment',
  templateUrl: './creat-coment.component.html',
  styleUrls: ['./creat-coment.component.css']
})
export class CreatComentComponent implements OnInit {
  @Input() id: any
  userid: string= "01"
  cmtid: string= "1002"
  cmtdec: any=1
  content: any=new FormControl('content')
  function: any= 'creat'
  constructor(private cmtService: CmtseviceService) {
  }


  ngOnInit(): void {
  }
  generateUniqueId (userid:string):string {
    let res: string=this.userid;
    res=res+"-"+Date.now()+"-"+this.cmtdec;
    return res;
  }
  addcoment()
  {
     var newCmt= new Cmt(this.id, this.userid, this.generateUniqueId(this.userid), this.content.value, this.cmtdec);
     try{
      console.log(this.cmtService.addCmt(newCmt).subscribe());
     }catch(err){
       console.log(err);
     }  
  }

}
