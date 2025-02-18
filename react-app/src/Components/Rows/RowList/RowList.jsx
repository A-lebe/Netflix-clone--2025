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
      islargerow ={true}/>
       <Row
        title="ComedyMovies" fetchurl={Requests.fetchComedyMovies}
      islargerow ={true}/>
       <Row
        title="DocumentaryMovies" fetchurl={Requests.fetchDocumentariesMovies}
      islargerow ={true}/>
       <Row
        title="HorrorMovies" fetchurl={Requests.fetchHorrorMovies}
      islargerow ={true}/>
       <Row
        title="RomanceMovies" fetchurl={Requests.fetchRomanceMovies}
      islargerow ={true}/>
      <Row
        title="TopRatedMovies" fetchurl={Requests.fetchTopRatedMovies}
      islargerow ={true}/>
      <Row
        title="TvShow" fetchurl={Requests.fetchTvShow}
      islargerow ={true}/>
      
    </div>
  )
}

export default RowList