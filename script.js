/*
fetch(`https://api.themoviedb.org/3/movie/550?api_key=6c0d1fb64932c05b61ac3383d271904f
`)
  .then(response => response.json())
  .then(data => console.log(data));
*/

const apiKey = "6c0d1fb64932c05b61ac3383d271904f"
const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=6c0d1fb64932c05b61ac3383d271904f"
// const movieId = 550
const imgPath = "https://image.tmdb.org/t/p/w500"


async function getMovies() {
    //const resp = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    const resp = await fetch(apiUrl)
    const respData = await resp.json()
    console.log(respData)
    
    respData.results.forEach((movie) => {
        const img = document.createElement("img")
        img.src = imgPath + movie.poster_path
        document.body.appendChild(img)
    })


    return respData
}

getMovies()