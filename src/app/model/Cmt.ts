export class Cmt{
    constructor(bookid: BigInteger, userid: string, cmtid: string,  content: string, cmtdec: BigInteger)
    {
        this.bookid= bookid;
        this.userid= userid;
        this.content= content;
        this.cmtid= cmtid;
        this.cmtdec= cmtdec;
    }
    bookid: BigInteger;
    userid: string;
    cmtid: string;
    content: string;
    cmtdec: BigInteger;
};