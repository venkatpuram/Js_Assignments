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
person1=new person("venkat","p",21,"Java","15/08/1997",{city:"guntur",picode:"522601"},"false","developer");
person2=new person("pavan","pikaleru",22,"java","04/12/1996",{city:"hyderabad",picode:"500042"},"false","sr developer");
print=function()
{
    console.log(person1);
    console.log(person2);
}();