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
amithab=new person("amithab","Bachan",21,"Java","15/08/1997",{city:"mumbai",picode:"400038"},"false","developer");
abhishek=new person("abhishek","",22,"java","04/12/1996","false","sr developer");
var abhishek=Object.create(amithab);
print=function()
{
    console.log(amithab);
    console.log(abhishek.lname);
    console.log(abhishek.address);
}();