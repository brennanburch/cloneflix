import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests';
import './Row.css';
import Banner from './Banner';
import './Banner.css';
import Nav from'./Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>

      <Row title="CloneFlix Originals" fetchURL ={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL = {requests.fetchTrending}/>
      <Row title="Action" fetchURL = {requests.fetchActionMovies}/>
      <Row title="Comedy" fetchURL = {requests.fetchComedyMovies}/>
      <Row title="Documentary" fetchURL = {requests.fetchDocumentaryMovies}/>
      <Row title="Horror" fetchURL = {requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchURL = {requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
