import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const link = useNavigate();

    const handelOnclick = () => {
        link('/')
    }
    return (
        <div >
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quisquam.
                <button onClick={handelOnclick}> go to </button>
            </p>
        </div>
    );
}