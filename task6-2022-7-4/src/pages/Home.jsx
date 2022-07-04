import './css/main.css';

export default function Home() {
    return (
        <div className="Home">
            <div className="container">
                <div className="cover">
                    <h1>Welcome to NA Site it's site for watching movies and some anime </h1>
                    <p>We provide many services like watching any where with any one you want</p>
                </div>

                <h2> Watch in our site the popular movies now </h2>
                <div className="movie_gallary">
                    <div className="col">
                        <img src={require('./img/movie.jpg')} alt="" />
                        <h3>Movie 1</h3>
                        <p>This is the first movie</p>
                    </div>
                    <div className="col">
                        <img src={require('./img/movie.jpg')} alt="" />
                        <h3>Movie 1</h3>
                        <p>This is the first movie</p>
                    </div>
                    <div className="col">
                        <img src={require('./img/movie.jpg')} alt="" />
                        <h3>Movie 1</h3>
                        <p>This is the first movie</p>
                    </div>
                </div>

            </div>
            <footer>

                <p>&copy; 2020 NA Site</p>
            </footer>
        </div>
    );
}