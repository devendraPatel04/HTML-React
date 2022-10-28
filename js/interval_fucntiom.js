let y="";
const main = ()=>{
  y=setInterval(() =>{
    showTime();
  },1000);
};

let c=0
const showTime = () =>{
  c++;
  const dt = new Date();
  
  const hr = dt.getHours();
  const mins = dt.getMinutes();
  const sec = dt.getSeconds();
  
  console.log(hr+" : "+mins+" : "+sec);
  
  if(c>=5){
    clearInterval(y);
    console.log("stopped");
  }
}
 
main();
console.log("121");