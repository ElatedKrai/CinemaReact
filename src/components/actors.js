import React from 'react';
import PropTypes from 'prop-types';

console.log('Actors.js');
const Actors = ({ actorsArr, getMovies }) => (
  <article className='actors'>
    <ul>
      {actorsArr.map((actor, index) => (
        <li key={index}>
          <img src = "https://image.tmdb.org/t/p/w640/${actor.profile_path}"
            alt={actor.name}/>
              <p>{actor.name}</p>
          <button className='filmes' onClick={getMovies} name={actor.id}>
            Films of Actor
              </button>
        </li>
      ))}
    </ul>
  </article>
);


Actors.propTypes = {
    actorsArr: PropTypes.array
}

export default Actors