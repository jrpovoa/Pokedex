import React, { useState } from 'react'
import { CaptureButton, CardContainer, CardImage, DetailsButton, FirstContainer, Name, PokeballBackground, Teste, TypeContainer, TypeImage } from './StyledComponents/CardStyled'
import { useNavigate } from 'react-router-dom'


export default function PokeCard(props) {
    const navigate = useNavigate()

    const goToPokemonDetails = () => {
        navigate("pokemon/details")
    }

    const goToMyPokemon = () => {
        navigate("myPokemon")
    }

    return (
        <div>
            <CardContainer className={props.pokemon.types[0].type.name}>
                <FirstContainer>
                    <Teste className={props.pokemon.types[0].type.name}>#{props.pokemon.id}</Teste>
                    <Name className={props.pokemon.types[0].type.name}>{props.pokemon.name}</Name>
                    <TypeContainer>
                        {props.pokemon.types.map(index => {
                            return (
                                <TypeImage key={index.id} src={require(`../img/types/${index.type.name}.png`)} />
                            )
                        })}
                    </TypeContainer>
                    <DetailsButton
                        className={props.pokemon.types[0].type.name}
                        onClick={goToPokemonDetails}>
                        Detalhes
                    </DetailsButton>
                </FirstContainer>
                <div>
                    <PokeballBackground src={require('../img/pokeballBackground.png')} />
                    <CardImage src={`${props.pokemon.sprites.other["official-artwork"].front_default}`} />
                    <CaptureButton>Capturar!</CaptureButton>
                </div>
            </CardContainer>
        </div>
    )
}
