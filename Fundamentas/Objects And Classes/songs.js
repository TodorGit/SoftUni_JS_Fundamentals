function songFactory(input){

    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    };

    let songs = [];
    let songNumber = input.shift();
    let typeOfSongs = input.pop();


    for(let i = 0; i < songNumber;i++){
        let[type,name,time] = input[i].split('_');
        let song  = new Song(type,name,time);
        songs.push(song);
    }

    if(typeOfSongs === 'all'){
        songs.forEach((i) => console.log(i.name));
    } else {
        let filter = songs.filter((i) => i.type === typeOfSongs);
        filter.forEach((i) => console.log(i.name));
    }


}

songFactory([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);