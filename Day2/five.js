class Person {
    constructor(fname,lname)
    {
        this.fname=fname;
        this.lname=lname;
    }
    print() {
        console.log(this.fname);
        console.log(this.lname);
    }
}
var person=new Person("amitabh","bachan");
person.print();