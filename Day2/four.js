function person(fname,lname)
{
    this.fname=fname;
    this.lname=lname;
    this.print=function()
    {
        console.log(this.fname);
        console.log(this.lname);
    }    
}
var person= new person("amitabh","bachan");
person.print();