import React from 'react';
import he from 'he';
import _ from 'lodash';
import { Card, Flag, Image } from 'semantic-ui-react';

const MovieCard = ({ movie, i }) => {
  let countryArray = Object.keys(JSON.parse('{' + movie.clist + '}'))
  
  if (countryArray.length > 10) {
    countryArray.pop() 
  }
  
  let countryList = countryArray.map((country) => {
    return <Flag name={_.toLower(country)}/>
  })
  
  return (
    <Card data-cy={`movie-${i}`}>
      <Image src={movie.img} />
      <Card.Content>
        <Card.Header data-cy='title-header'>
          {he.decode(movie.title)}
        </Card.Header>
        <Card.Description>
          <p>Rating: {_.round(movie.avgrating, 1)}</p>
          <p data-cy='flag-list' >Availible in: {countryList}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;
