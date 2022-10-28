let student = {
  name: "dev",
  year: 4,
  gender : "male",
  age: 22,
  
  address : {
  pin:45221,
  dist: "dhar",
  },
  luckyNo : [1,2,3],
  
}
let key = "address";
console.log(student["name"]);
console.log(student["age"]);
console.log(student.key);
console.log(student["key"]);


// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(student.age);
// student.name = "ram";
// console.log(student.name);

// console.log(typeof student);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof [1,2,3]);

console.log(false === 0); // check dataype too
console.log(false == 0);
console.log(false == "");
console.log(false == false);
console.log(false == undefined);

console.log(1 == "1");

let s = "";
let i=0;
while(i<10){
  s+=i;
  i++;
}

console.log(s);
console.log(Boolean("askhd"));
console.log(Boolean(null));