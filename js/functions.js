// map function
//pre-defined functions map fiter and reduce

let arr = [1,2,3,4,5];

const ar1 = arr.map(function(num){
  return num*num;
});

const ar2 = arr.filter(function(num){
  if(num%2==0)
    return true;
  return false;
});

const ar3 = arr.reduce(function(s,num){
  s+=num;
  return s;
});
console.log(arr);
console.log(ar1);
console.log(ar2);
console.log(ar3);