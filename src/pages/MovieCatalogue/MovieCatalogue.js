import { useState } from "react"
import MyParticles from "../MyParticles"
import Navbar from "../Navbar"
import axios from 'axios'
import './MovieCatalogue.css'
import { MantineProvider, ScrollArea } from "@mantine/core"


export function MovieCatalogue(){
    const [query,setQuery] = useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("")

    const API_KEY = "58c6ead8"

    const searchMovies = async () => {
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
            );
            if(response.data.Response === "True"){
                console.log(response.data)
                setMovies(response.data.Search);
                setError("")
            } else {
                setMovies([])
                setError(response.data.Error)
            }
        } catch (err) {
            setError("An Error Occurred While Fetching Data")
            console.log(err)
        }
    }


    return(
        <MantineProvider>
        <div className="App">
            <div className="App-header">
                <MyParticles/>
                <Navbar/>
                <div className="movieContainer">
                    <h1>Movie Search</h1>
                    Title:
                    <input className="movieInput" type="text" placeholder="Search For A Movie..." value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button onClick={searchMovies} className="movieSearchButton">Search</button>

                    {error && <p className="moviesError">{error}</p>}

                    <div className="movieScrollContainer">
                        {movies.map((movie) => (
                            <div className="movie">
                                <a href={"https://www.imdb.com/title/"+movie.imdbID} target="_blank" rel="noreferrer"><h3>{movie.Title}</h3></a>
                                <p>{movie.Year}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
                

            </div>

        </div>
        </MantineProvider>
    )
}

export default MovieCatalogue