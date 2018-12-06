function person(fname,lname,age,skills,dateofbirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.married=married;
    this.profession=profession;
    this.address=address;

}
var amithab=new person("amithab","Bachan",21,"Java","15/08/1997",{city:"mumbai",picode:"400038"},"false","developer");
var abhishek=Object.create(amithab);
abhishek.fname="abhishek";
abhishek.age="35";
abhishek.skills="java";
abhishek.dateofbirth="04/10/1983";
abhishek.married="false";
abhishek.profession="developer"

aaradhya=Object.create(abhishek);
aaradhya.fname="aaradhya";
aaradhya.age="7";
aaradhya.dateofbirth="10/10/2011";

print=function()
{
    console.log(amithab);
    console.log(abhishek.fname);
    console.log(abhishek.dateofbirth);
    console.log(aaradhya);
    console.log(aaradhya.address);
}();