import React, { useState } from 'react';
import { Container, InvisibleButton, LogoPokemon, PokedexButton } from "./styled";
import logo from "../../img/pokemon.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const url = window.location.pathname
    
    const [rightButtonText, setRightButtonText] = useState("Pokedéx" || "Voltar")

    const rightButtonAction = () => {
        if (url === '/') {
            setRightButtonText("Voltar")
            goToMyPokemon()
        }
        else {
            setRightButtonText("Minha Pokedéx")
            goToHome()
        }
    }
    const goToMyPokemon = () => {
        navigate("myPokemon")
    }
    const goToHome = () => {
        navigate("/")
    }
    return (
        <Container>
            <InvisibleButton>Voltar</InvisibleButton>
            <LogoPokemon src={logo} alt="logo-pokemon.jpg" onClick={() => goToHome()} />
            <PokedexButton onClick={() => rightButtonAction()}>{rightButtonText}</PokedexButton>
        </Container>
    )
}

export default Header