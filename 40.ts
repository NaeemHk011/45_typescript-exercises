type Album = {
    artist :string;
    title :string;
    tracks?: number;
};

function make_album(artist:string, title:string,tracks?:number):Album{
    let album :Album ={ artist, title};


if(tracks){
   album.tracks = tracks;
}
return album;
}
const album1 =  make_album("The Beatles", "Abbey Road");
const album2 = make_album("Pink Floyd", "Dark Side of the Moon", 10);
const album3 = make_album("Led Zeppelin", "IV", 8);

console.log(album1);
console.log(album2);
console.log(album3);