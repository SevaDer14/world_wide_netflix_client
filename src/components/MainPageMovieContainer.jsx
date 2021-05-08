import React, { useState, useEffect } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';
import { getUserLocation } from '../modules/getUserLocation';
import MovieCard from '../components/MovieCard'

const MainPageMovieContainer = () => {
  const [topTenMovies, setTopTenMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const fetchMovieData = async (lat, lon) => {
    try {
      if (lat && lon) {
        const response = await axios.get(`/movies/?lat=${lat}&lon=${lon}`);
        setTopTenMovies(response.data.body);
        setErrorMessage('');
      } else {
        const response = await axios.get(`/movies/`);
        setTopTenMovies(response.data.body);
        setErrorMessage(
          "Allow your location to show movies that's not from your country"
        );
      }
    } catch (error) {
      if (error.response.status === 500) {
        setErrorMessage(
          'Please try again later, our servers are currently not responding'
        );
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  useEffect(() => {
    (async () => {
      let [lat, lon] = await getUserLocation();
      fetchMovieData(lat, lon);
    })();
  }, []);

  let movieList = topTenMovies.map((movie, i) => {         
  return (<MovieCard data-cy='movie-card' movie={movie} i={i}/>)
  })

  return (
    <Container >
      {errorMessage && <h1 data-cy='error-message'>{errorMessage}</h1>}
      <Card.Group data-cy='movie-container' itemsPerRow={5} centered>{movieList}</Card.Group>
    </Container>
  );
};

export default MainPageMovieContainer;