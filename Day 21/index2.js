"use strict";
class Customer {
    constructor(cid = 0, cname = "", cplace = "") {
        this.cid = cid;
        this.cname = cname;
        this.cplace = cplace;
    }
    showDetails() {
        let str = `Customer Details ::  Id--> ${this.cid}, Name--> ${this.cname}, City--> ${this.cplace}`;
        console.log(str);
    }
}
let c1 = new Customer();
let c2 = new Customer(10256);
let c3 = new Customer(10257, 'Scott');
let c4 = new Customer(10258, 'Shyam', 'Hyderabad');
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
