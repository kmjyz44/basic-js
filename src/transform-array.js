function transform(arr){
    let array =arr;
    
for(let i = 0;i<arr.length;i++ ){
  //console.log(arr[i]); 
switch(arr[i]){
  
  case '--discard-next':
    array.splice(i,2);
    break;
  case '--discard-prev':
    array.splice(i-1,2);
    break;
  case '--double-next':
    array.splice(i,0,array[i+1]);
    break;
  case '--double-prev':  
  array.splice(i-1,0,array[i-1]);
  break;
}
///break;

 } 
    console.log(array);
}


//transform([1, 2, 3,'--double-next', 4, 5]); 