import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';

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
  }
  image: string;
  origin: {
    name: string;
  }
}

const Main: React.FC = () => {
  const [character, setCharacter] = useState<CharacterProps[]>([]);

  useEffect(() => {
    api.get(`/character/?page=${Math.floor(Math.random() * 33)}`).then(response => {
      setCharacter(response.data.results);
    })
  }, []);

  return(
    <Container>
      <Header>
        <img src={logoImg} alt="Logo"/>
        <span>Rick and Morty Characters</span>
      </Header>

      <Body>
        {character.map(char => (
          <CharactersContainer key={char.id}>
            <CharacterImage>
              <img src={char.image} alt=""/>
            </CharacterImage>

            <CharacterInfo >
              <Status>
                <a href="#">{char.name}</a>
                <p>{char.status} - {char.species} </p>
              </Status>

              <Location>
                <span>Last known location:</span>
                  <a href="#">{char.location.name}</a>
              </Location>

              <FirstAppearence>
                <span>Origin:</span>
                  <a href="#">{char.origin.name}</a>
              </FirstAppearence>
            </CharacterInfo>
          </CharactersContainer>
        ))}
      </Body>
    </Container>
  );
};

export default Main;
