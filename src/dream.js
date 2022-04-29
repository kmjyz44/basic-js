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
