import styled from 'styled-components';

//Login
export const DivLogin = styled.div`
  width: 50%;
  height: 100vh;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  > img {
    padding: 16px 0px 0px 0px;
  }

  @media (max-width: 950px) {
    width: 100%;
    overflow: auto;
  }

  @media (max-height: 600px) {
    justify-content: unset;
  }
`;

export const Input = styled.input`
  padding: 10px 0px;

  width: calc(80% - 32px);
  @media (min-width: 1500px) {
    width: calc(60% - 32px);
  }
`;

export const ButtonEnter = styled.button`
  margin: 16px 0px;
  padding: 10px 0px;
  width: 80%;
  height: 44px;
  border: none;
  border-radius: 4px;

  cursor: pointer;
  transition: 0.5s;

  @media (min-width: 1500px) {
    width: 60%;
  }

  &:hover {
  }
`;

//Layout
export const DivLayout = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 950px) {
    display: none;
  }

  h1 {
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 32px;

    @media (max-height: 350px) {
      margin-top: 0px;
    }
  }

  h2 {
    font-weight: 300;
    text-align: center;
    padding: 0px 10px;
    font-size: 20px;
  }
`;

export const DivIlustracao = styled.div`
  > img {
    width: 30vh;
  }

  @media (max-height: 350px) {
    display: none;
  }
`;

export const VoltarHome = styled.div`
  padding-bottom: 16px;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
  }
  @media (max-width: 576px) {
    cursor: none;
  }
`;
