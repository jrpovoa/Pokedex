import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const Background = styled.div`
    background-color: #5E5E5E;
    width:100%;
    margin: auto;
`

const Header = styled.div`
    background-color: white;
    width: 100%;
    height: 160px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`
const LogoPokemon = styled.img`
    width: 307px;
    height: 113px;
    left: 566px;
    top: 21px;
`

const ButtonContainer = styled.div`
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; */
`

const PokedexButton = styled.button`
    padding: 4px 10px;
    width: 287px;
    height: 74px;
    top: 41px;
    background-color: #33A4F5;
    border-radius: 8px;
    border: none;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
`

const InvisibleButton = styled.button`
    background-color: white;
    border: none;
    color: white;
    width: 287px;
    height: 74px;
`

const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #FFFFFF;
`

export default function Home() {
    const navigate = useNavigate()
    const goToMyPokemon = () => {
        navigate("myPokemon")
    }
  return (
    <Background>
        <Header>
            <InvisibleButton>Voltar</InvisibleButton>
            <LogoPokemon src={require('../img/pokemon.png')} />
            <ButtonContainer>
                <PokedexButton onClick={goToMyPokemon}>Pokedéx</PokedexButton>
            </ButtonContainer>
        </Header>
        <Title>Todos Pokémon</Title>

    </Background>
  )
}
