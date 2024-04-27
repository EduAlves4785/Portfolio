import styled from "styled-components";

//Navigation

export const Infos_div = styled.div`
  width: 30rem;
  height: 38rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;

  .sobre {
    padding: 0.5rem;
    width: 28rem;
    height: auto;

    h1 {
      font-size: 55px;
      color: #fafafa;
    }

    h3 {
      font-size: 25px;
      color: #e6e6e6;
    }

    p {
      font-size: 18px;
      font-weight: 300;
      color: #bfbfbf;
    }
  }

  .icones {
    width: 20rem;
    padding: 0.5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & a {
      color: #bfbfbf;
      font-size: 25px;
      transition: 0.2s ease-in;

      &:hover {
        margin-bottom: 0.5rem;
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    gap: 2rem;
    position: relative;

    .sobre {
      width: 100%;

      h1 {
        font-size: 30px;
        color: #fafafa;
      }
    }

    .icones {
      width: 100%;
    }
  }
`;

export const Navigation = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 10rem;

  & button {
    font-size: 18px;
    color: gray;
    width: 10rem;
    height: 2rem;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease-in;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

//Conteúdo

export const Content = styled.section`
  overflow: auto;
  width: 45rem;
  height: 100%;
  position: fixed;
  right: 0;
  color: #d9d9d9;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;


  @media (max-width: 768px) {
    position: absolute;
    overflow: none;
    width: 100%;
    height: auto;
    padding: 1rem;
    left: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const SobreContainer = styled.div`
  width: 45rem;
  height: auto;
  font-size: 17px;
  font-weight: 500;
  transition: 0.3s ease-in;
  padding: 1rem;
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 20px 22px -15px rgba(0, 0, 0, 0.75);
    background-color: rgba(255, 255, 255, 0.06); /* Cor com transparência */
    backdrop-filter: blur(10px);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
  }
`;
export const ExperienciasContainer = styled.div`
  width: 45rem;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a{
    color: #D0D1D3;
    text-decoration:none;
  }

  .experiencia-content {
    padding: 1rem;
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
        box-shadow: 0px 20px 22px -15px rgba(0, 0, 0, 0.75);
      background-color: rgba(255, 255, 255, 0.06); /* Cor com transparência */
      backdrop-filter: blur(10px);

      h4 {
        color: white;
      }
    }
  }

  .dados-experiencia {
    width: 25rem;
    height: 2rem;
    gap: 1rem;
    color: #d9d9d9;
    display: flex;
    justify-content: safe;
    align-items: center;
  }

  .experiencia-descricao {
    font-size: 17px;
    font-weight: 500;

    & div {
      display: flex;
      gap: 2rem;
      max-width: 100%;
      height: 5rem;
      align-items: center;

      & h4 {
        background-color: black;
        opacity: 0.8;
        color: #cccccc;
        width: 6rem;
        height: 3rem;
        display: flex;
        font-size: 15px;
        font-weight: 500;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-radius: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;

    .dados-experiencia {
      width: 100%;
      font-weight: 400;
      font-size: 14px;
    }

    .experiencia-descricao {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      & div {
        gap: 0.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: auto;

        & h4 {
          width: 6rem;
          font-size: 12px;
          height: 3rem;
        }
      }
    }
  }
`;

export const ProjetosContainer = styled.div`
  width: 45rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-radius: 8px;

  h1 {
    color: white;
  }

  .projeto-box {
    width: 100%;
    height: auto;
    transition: 0.3s;

    .video-box {
      width: 100%;
      height: 20rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
  }
`;
