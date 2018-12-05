var person={name:"brendon",surname:"eich"};
console.log(person);
Object.defineProperties(person,{"name":{value:"steve",configurable:true,writable:true,enumerable:true},"surname":{value:"jobs",configurable:true,writable:true,enumerable:true}});
console.log(person);
