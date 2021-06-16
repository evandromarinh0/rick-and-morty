import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;

  > img {
    width: 105px;
  }

  > span {
    font-family: 'Bangers';
    font-size: 96px;
  }

  @media (max-width: 970px) {
    span {
      font-size: 200%;
      margin-top: 24px;
    }
  }
`;

export const Body = styled.div`
  padding: 32px 64px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 860px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
  }
`;

export const CharactersContainer = styled.div`
  margin: 16px auto 32px;
  background: #312e38;
  width: 650px;
  height: 236px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 860px) {
    background: #312e38;
    width: 450px;
    height: 450px;
    flex-direction: column;
  }
`;

export const CharacterImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 236px;
    height: 236px;
    border-radius: 8px 0 0 8px;
  }

  @media (max-width: 860px) {
    img {
      flex: 1;
      border-radius: 8px 8px 0 0;
    }
  }
`;

export const CharacterInfo = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Status = styled.div`
  a {
    color: #fff;
    font-size: 24px;
    text-decoration: none;

    &:hover {
      color: #ff9000;
    }
  }

  > p {
    font-size: 16px;
    color: #fff;
  }

  @media (max-width: 860px) {
    p {
      margin-bottom: 16px;
    }
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 14px;
    color: #696969;
  }

  > a {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    font-family: 'RobotoSlab-Regular';

    &:hover {
      color: #ff9000;
    }
  }

  @media (max-width: 860px) {
    a {
      margin-bottom: 16px;
    }
  }
`;

export const FirstAppearence = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 14px;
    color: #696969;
  }

  > a {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    font-family: 'RobotoSlab-Regular';

    &:hover {
      color: #ff9000;
    }
  }
`;
