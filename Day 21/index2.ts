class Customer
{     
    public cid:number;
    public cname:string;
    public cplace:string ; 

    constructor(cid:number = 0, cname:string = "", cplace:string = "")
    {
       this.cid = cid;
       this.cname = cname;
       this.cplace=cplace;
    }

    public showDetails()
    {
        let str:string  = `Customer Details ::  Id--> ${this.cid}, Name--> ${this.cname}, City--> ${this.cplace}`;
        console.log(str);
    }
}


let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10257,'Scott');
let c4:Customer = new Customer(10258, 'Shyam', 'Hyderabad');

c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();