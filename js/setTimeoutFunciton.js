console.log("hellow");
setTimeout(()=>{
  console.log("call back fucntion");
},3000);

console.log("1");

function print(){
  console.log("rpint functio here");
};
const main = () => {
  console.log("3");
  setTimeout(()=>{
    console.log("4");
  },2000);
  console.log("5");
  setTimeout(print(),5000);
}

main();