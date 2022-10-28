// const r = function (){
//   console.log("anonymous fucntion");
// };

// console.log(r());

// const completename = (fn,ln) => {
//   return fn+" , "+ln;
// };

// console.log(completename("dev","palet"));

// //selft invoked function

// (function printMessage(name){
//   console.log("welcome here "+name);
// })("ram");

// (()=>{
//   console.log("invoked");
// })();

//scope

// function print(){
//   console.log(this);  // window --> global scope
// }

// print();

// function a(){
//   function b(){
//     console.log(this);
//   }
//   b();
// }

// a();


const obj = {
  newFunc: function(){
    console.log(this); //obj
  },
  newFunc2: ()=>{
    console.log(this);  //window
  },
};

obj.newFunc2();

obj.newFunc();














