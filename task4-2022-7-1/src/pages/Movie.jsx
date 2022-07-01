import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6bd2f87c212a016945bb7783c8671cc2&language=en-US`).then(res => {
            setMovie(res.data);
            setLoading(false);
        }
        )
    }, [id]);

    return (
        <div className='Movie'>
            <h1>Movie</h1>

            <p>This is the movie page</p>
            {
                loading ? <p>Loading...</p> : <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>{movie.description}</p>
                </div>
            }
        </div>

    );
}