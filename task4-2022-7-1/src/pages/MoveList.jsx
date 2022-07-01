import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
export default function MoveList() {

    const [moves, setMoves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://api.themoviedb.org/3/movie/popular?api_key=6bd2f87c212a016945bb7783c8671cc2&language=en-US&page=2").then(res => {
            setMoves(res.data.results);
            setLoading(false);
        }
        )
    });

    return (
        <div className='MoveList'>
            <h1>MoveList</h1>
            <ul>


                {
                    loading ? <p>Loading...</p> : moves.map(move => <li key={move.id}>
                        {<img src={`https://image.tmdb.org/t/p/w500/${move.poster_path}`} alt={move.title} />}
                        <NavLink to={`/movies/${move.id}`}>{move.title}</NavLink>
                        }
                    </li>)
                }

            </ul>
        </div >
    );
}