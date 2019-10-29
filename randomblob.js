//write a function to retreieve a blob of json
//make an ajax request using fetch function

// function fetchAlbum() {
//     fetch('http://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(json => console.log(json));
// }

async function fetchAlbum() {
    const res =await fetch('http://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()

    console.log(json);
}

fetchAlbum();