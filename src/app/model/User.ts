export class user{
    constructor(username: string, pass: string, userid: string, userage: BigInteger, email: string)
    {
        this.email= email;
        this.username= username;
        this.pass= pass;
        this.userage= userage;
        this.userid= userid;
    }
    username: string; 
    pass: string;
    userid: string;
    email: string;
    userage: BigInteger;
}