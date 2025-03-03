
import React, { useState, useEffect } from 'react';
import Requests from '../../utils/Requests';
import axios from '../../utils/Axios';
import './Banner.css';

function Banner() {
  // The React useState Hook allows us to track state in a function component.
  // destructuring;
  // The current state, A function that updates the state.
  const [movie, setmovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        // we use get method to fetch data through api
        const request = await axios.get(Requests.fetchNetflixOrigionals);
        setmovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);
//It refers to a process or operation that shortens or cuts off a piece of data, such as a string or a file, by removing characters, digits, or bytes from the end.
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_buttonplay">play</button>
          <button className="banner_buttonList">my list</button>
          <div>
            <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
          </div>
          <div className="banner_fadeBottom" />
        </div>
      </div>
    </div>
  );
}
export default Banner;