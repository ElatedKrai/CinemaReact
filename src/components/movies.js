import React from 'react';
import PropTypes from 'prop-types';

console.log('Movies.js');
const Movies = ({movieInfo, getActors}) => (
    <article className='movies'>
        {movieInfo.map((movie, index) => (
            <div className='card' key={index}>
                <h2>{movie.movieTitle}</h2>
                <section>
                    <picture>
                        <img src={movie.bg} alt={movie.movieTitle} />
                    </picture>
                    <p>{movie.movieDescription}</p>
                </section>
                <button onClick={getActors} name={movie.id}>Show details</button>
                {!!movie.budget && <span>Nota: {movie.budget}</span>}
            </div>
        ))}
    </article>
)
Movies.propTypes = {
    movieInfo: PropTypes.array
}

export default Movies