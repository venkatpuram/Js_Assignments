function Person(id,name)
{
    this.id=id;
    this.name=name;
    
}
var person1= new Person(101,"Amitabh");
var person2= new Person(102,"Bachan");
Person.prototype.print=function(){
console.log(person1);
console.log(person2);

}();
