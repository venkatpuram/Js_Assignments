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
amithab=new person("amithab","Bachan",60,"Java","15/08/1958",{city:"mumbai",picode:"400038"},"false","developer");
var abhishek=Object.create(amithab);
abhishek.fname="abhishek";
abhishek.age="35";
abhishek.skills="java";
abhishek.dateofbirth="04/10/1983";
abhishek.married="false";
abhishek.profession="developer"
print=function()
{
    console.log(amithab);
    console.log(abhishek.fname);
    console.log(abhishek.address);
}();