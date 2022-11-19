import styled from "styled-components"

export const Container = styled.div`
background-color: white;
position: relative;
width: 100%;
height: 12vh;
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: space-between;
align-items: center;
`

export const InvisibleButton = styled.button`
visibility: hidden;
width: 10vw;
height: 5vh;
border-radius: 8px;
@media only screen and (max-width: 800px) {
    margin: 2vw;
    width: 80px;
    height: 50px;
    font-size: 12px;
}
`

export const LogoPokemon = styled.img`
width: 12vw;
height: 10vh;
&:hover{
cursor: pointer;
}
@media only screen and (max-width: 800px) {
    height: 60px;
    width: 150px;
}
`

export const PokedexButton = styled.button`
padding: 4px 10px;
width: 13vw;
height: 7vh;
background-color: #33A4F5;
border-radius: 8px;
border: none;
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
&:hover{
background-color: #63bbfa;
cursor: pointer;
}
@media only screen and (max-width: 800px) {
    margin: 2vw;
    width: 100px;
    height: 50px;
    font-size: 12px;
}
`