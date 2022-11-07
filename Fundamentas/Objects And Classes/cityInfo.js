function cityInfo(info){
 
for( let key of Object.keys(info)){
    console.log(`${key} -> ${info[key]}`);
}

}

cityInfo()