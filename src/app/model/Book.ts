import { ThrowStmt } from '@angular/compiler';
import {Cmt} from './Cmt'
export class Book{
    bookid: BigInteger;
    bookname: string;
    img: string;
    author: string;
    price: BigInteger;
    nxb: string;
    yearnxb: BigInteger;
    nopage: BigInteger;
    des: string;
    norating: BigInteger;
    rating: BigInteger;
    coment: Array<Cmt>
    constructor(bookid: BigInteger, bookname: string, img: string, author: string, price: BigInteger, nxb: string, yearnxb: BigInteger, nopage: BigInteger, des: string, norating: BigInteger, rating: BigInteger, coment: Array<Cmt>)
    {
        this.bookid= bookid;
        this.bookname= bookname;
        this.img= img;
        this.author= author;
        this.price= price;
        this.nxb= nxb;;
        this.nopage= nopage;
        this.yearnxb= yearnxb;
        this.norating= norating;
        this.rating= rating;
        this.des= des;
        this.coment= coment;
    }
};