import React from 'react'
import Row from "../../Rows/Row/Row";
import Requests from "../../../utils/Requests";
import "./RowList.css"
function RowList() {
  return (
    <div>
      <Row
        title="NETFLIXORIGINALS"
        fetchurl={Requests.fetchNetflixOrigionals}
        islargerow ={true}
      />
     <Row
        title="Trending now" fetchurl={Requests.fetchTrending}
    />
       <Row
        title="ComedyMovies" fetchurl={Requests.fetchComedyMovies}
      />
       <Row
        title="DocumentaryMovies" fetchurl={Requests.fetchDocumentariesMovies}
      />
       <Row
        title="HorrorMovies" fetchurl={Requests.fetchHorrorMovies}
      />
       <Row
        title="RomanceMovies" fetchurl={Requests.fetchRomanceMovies}
      />
      <Row
        title="TopRatedMovies" fetchurl={Requests.fetchTopRatedMovies}
      />
      <Row
        title="TvShow" fetchurl={Requests.fetchTvShow}
    />
      
    </div>
  )
}

export default RowList