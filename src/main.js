function countCats(array) {
    let cat =0;
    for(let arrays of array){
for(let i = 0; i < arrays.length;i++){
if(arrays[i]==='^^'){
    cat= cat+1;

} 
}

 }
 return cat;
 
} 

 
function createDreamTeam (array){
    let secret =[];
for(let arrays of array){
    for(let i =0; i< arrays.length;i++){
        if(arrays[i]===arrays[i].toUpperCase()){
            secret.push(arrays[i]);

    }
}

}
return((secret.sort()).join(''));
}
