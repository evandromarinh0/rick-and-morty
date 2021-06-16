/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Body,
  CharactersContainer,
  CharacterImage,
  CharacterInfo,
  Status,
  Location,
  FirstAppearence,
} from './styles';

interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  image: string;
  origin: {
    name: string;
  };
}

const CHARACTERS_QUERY = `
{
  characters {
    results {
      id
      name
      image
      status
      species
      origin {
        name
      }
      location {
        name
      }
    }
  }
}
`;

const Main: React.FC = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: CHARACTERS_QUERY }),
    })
      .then(response => response.json())
      .then(data => setCharacters(data.data.characters.results));
  }, []);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Logo" />
        <span>Rick and Morty Characters</span>
      </Header>

      <Body>
        {characters.map((character: CharacterProps) => (
          <CharactersContainer key={character.id}>
            <CharacterImage>
              <img src={character.image} alt={character.name} />
            </CharacterImage>

            <CharacterInfo>
              <Status>
                <a href="#">{character.name}</a>
                <p>
                  {character.status} - {character.species}
                </p>
              </Status>

              <Location>
                <span>Last known location:</span>
                <a href="#">{character.location.name}</a>
              </Location>

              <FirstAppearence>
                <span>Origin:</span>
                <a href="#">{character.origin.name}</a>
              </FirstAppearence>
            </CharacterInfo>
          </CharactersContainer>
        ))}
      </Body>
    </Container>
  );
};

export default Main;
