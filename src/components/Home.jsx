
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MOVIE_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=dd2e28b6c8ff10c5a8a9521272e2cad9&language=en-US&page=1';
const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';




const Home = () => {

    const [movies, setMovies] = useState([]);
    const navigate =  useNavigate();
    useEffect(() => {
        axios.get(MOVIE_API).then((resp) => {
            setMovies(resp.data.results)
        })

    }, []);

    

  
       const clickhandel =(movie) => {
        
        navigate('/Movie/'+ movie.id , {state: movie});

       }

    


       
    return (
        <div style={{ padding: 20, display: 'flex', flexWrap: 'wrap' }}>
            {movies.map(movie => {

                const id = movie.id;
                return (
                    <div key ={movie.id}>
                        
                            <Card onClick={()=> clickhandel(movie)}  style={{ width: '17rem', padding: 25, height: 400, overflow: 'hidden', margin: 10 }}>
                               
                                <Card.Img src={IMAGE_API + movie.poster_path} height={300} width={10}></Card.Img>
                                <Card.Title>{movie.title}</Card.Title>

                            </Card>
                       
                    </div>
                )
            })}

        </div>
    )
}
export default Home;