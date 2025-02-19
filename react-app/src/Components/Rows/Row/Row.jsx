import React from 'react'
import axios from "../../../utils/Axios";
import movietrailer from 'movie-trailer'
import YouTube from "react-youtube";
import "./Row.css";
import { useState } from 'react';
import { useEffect } from 'react';

function Row({ title, fetchurl, islargerow }) {
  
    const [movies, setmovie] = useState([]);
    const [trailerurl, settrailerurl] = useState("")
    const base_url = "https://image.tmdb.org/t/p/original";
  
    useEffect(() => {
      (async () => {
        try {
          console.log(fetchurl)
          const request = await axios.get(fetchurl);
          console.log(request)
          setmovie(request.data.results);
        } catch (error) {
          console.log("error", error);
        }
    })()
    }, [fetchurl]);
 
  const handleClick = (movie) => {
    if (trailerurl) {
       settrailerurl("")
    } else {
      movietrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          console.log(url)
          const urlparams = new URLSearchParams(new URL(url).search)
          console.log(urlparams)
          console.log(urlparams.get('v'))
          settrailerurl(urlparams.get('v'));
        })  }
  }
  const opts = {
    height: '190',
    width: '100%',
    playerVars: {
      autoplay:1,
    }
  }
  return (
   <div className="rows">
      <h1 className='title'>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              islargerow  ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row-poster ${islargerow  && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{padding:"40px"}}>{trailerurl && <YouTube videoId={trailerurl} opts={opts} />}</div>
    </div>
  )
 }

export default Row