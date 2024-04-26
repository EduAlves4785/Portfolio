import styled from "styled-components";

//Navigation

export const Infos_div = styled.div`
    width: 30rem;
    height: 38rem;
    position: fixed;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;

    .sobre {
        padding: .5rem;
        width: 28rem;
        height: auto;
        background-color: blue;

        h1 {
            font-size: 55px;
            color: #FAFAFA;
        }

        h3 {
            font-size: 25px;
            color: #FAFAFA;
        }

        p {
            font-size: 18px;
            color: #D9D9D9;
        }
    }

    .icones {
        width: 20rem;
        padding: .5rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: blue;

        & a {
            color: gray;
            font-size: 25px;
            transition: .2s ease-in;

            &:hover {
                margin-bottom: .5rem;
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
                color: #FAFAFA;
            }
        }

        .icones {
            width: 100%;
        }
    }
`;

export const Navigation=styled.div`
    width: 20rem;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 10rem;

    & button{
        font-size: 18px;
        color: gray;
        width: 10rem;
        height: 2rem;
        border: none;
        background:none;
        cursor: pointer;
        transition: .3s ease-in;
    }

    @media (max-width: 768px){
        width: 100%;
    }
`

//Conteúdo

export const Content=styled.section`
    overflow: auto;
    background-color: floralwhite;
    width: 45rem;
    height: 100%;
    position: fixed;
    right: 0;
    color: gray;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;

    @media (max-width: 768px){
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
`

export const SobreContainer=styled.div`
    background-color: purple;
    width: 45rem;
    height: auto;
    font-size: 17px;
    font-weight: 500;

    @media (max-width: 768px){
        width: 100%;
        font-size: 15px;
    }
`
export const ExperienciasContainer=styled.div`
    background-color: orange;
    width: 45rem;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .experiencia-content{
        background-color: brown; 
        transition: .3s;
        
        &:hover{
            background-color: rgba(255, 255, 255, 0.5); /* Cor com transparência */
            backdrop-filter: blur(10px);
        }
    }

    .dados-experiencia{
        width: 25rem;
        height: 2rem;
        gap: 1rem;
        color: gray;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: green;
    }

    .experiencia-descricao{
        background-color: pink;
        font-size: 17px;
        font-weight: 500;

        & div{
            display: flex;
            gap: 2rem;
            max-width: 100%;
            height: 5rem;
            background-color: red;

            & h4{
                background-color: black;
                color: #47EFFA;
                width: 6rem;
                height: 3rem;
                display: flex;
                font-size: 15px;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
            }
        }
    }

    @media (max-width: 768px){
        width: 100%;
        font-size: 15px;

        .dados-experiencia{
            width: 100%;
            font-weight: 400;
            font-size: 14px;
        }

        .experiencia-descricao{
            & div{
                gap: .2rem;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                height: auto;

                & h4{
                    width: 6rem;
                    font-size: 12px;
                    height: 3rem;
                }
            }
        }
    }
`

export const ProjetosContainer=styled.div`
    background-color: green;
    width: 45rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h1{
        color: white;
    }

    .projeto-box{
        background-color: red;
        width: 100%;
        height: auto;
        transition: .3s;

        &:hover{
            background-color: rgba(255, 255, 255, 0.5); /* Cor com transparência */
            backdrop-filter: blur(10px);
        }

        .video-box{
            width: 100%;
            height: 20rem;
        }

    }

    @media (max-width: 768px){
        width: 100%;
        font-size: 15px;
    }
`


