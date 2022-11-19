import React, { useState } from 'react'
import { CaptureButton, CapturedButton, CardContainer, CardImage, CloseButton, ColumnContainer, DetailImage, DetailsButton, DetailsContainer, DetailsName, DetailsNumber, DetailsStats, DetailsTitle, FirstContainer, GrayContainer, ImageContainer, InfoContainer, MainImage, ModalContainer, Moves, MovesBackground, MovesContainer, MovesSlice, Name, NameContainer, PokeballBackground, PokeballImage, StatsContainer, StatsName, StatsNumber, Teste, TypeContainer, TypeDetails, TypeImage, TypeImageDetails } from './StyledComponents/CardStyled'
import ProgressBar from '../Global/ProgressBar/ProgressBar'


const PokeCard = (props) => {

    const [modal, setModal] = useState('none')
    const closeModal = () => {
        setModal('none')
    }

    const goToPokemonDetails = () => {
        setModal('block')
    }

    const moves = props.pokemon.moves.map((move) => {
        return (
            <MovesBackground key={move.move.name}>
            <MovesSlice>{move.move.name}</MovesSlice>
            </MovesBackground>
        )
    })

    return (
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
                <DetailsButton className={props.pokemon.types[0].type.name} onClick={goToPokemonDetails}>
                    Detalhes
                </DetailsButton>
            </FirstContainer>
            <div>
                <PokeballBackground src={require('../img/pokeballBackground.png')} />
                <CardImage src={`${props.pokemon.sprites.other["official-artwork"].front_default}`} />
                {props.verifyPokemon ?
                    <CapturedButton>
                        Capturado!
                    </CapturedButton>
                    :
                    <CaptureButton onClick={() => props.capturePokemon(props.pokemon.id)}>
                        Capturar!
                    </CaptureButton>
                }
            </div>
            <ModalContainer modal={modal}>
                <CloseButton onClick={closeModal}>Fechar</CloseButton>
                <GrayContainer>
                    <DetailsTitle>Detalhes</DetailsTitle>
                    <DetailsContainer className={props.pokemon.types[0].type.name}>
                        <ImageContainer>
                            <DetailImage src={`${props.pokemon.sprites.front_default}`} />
                            <DetailImage src={`${props.pokemon.sprites.back_default}`} />
                        </ImageContainer>
                        <InfoContainer>
                            <ColumnContainer>
                                <DetailsStats>Base stats</DetailsStats>
                                {props.pokemon.stats.map((stat) => {
                                    return (
                                        <StatsName key={stat.stat.name}>
                                            <StatsName>{stat.stat.name}: </StatsName>
                                            <StatsNumber>{stat.base_stat}</StatsNumber>
                                            <ProgressBar bgcolor={"green"} completed={stat.base_stat} />
                                        </StatsName>
                                    )
                                })}
                            </ColumnContainer>
                        </InfoContainer>
                        <NameContainer>
                            <StatsContainer>
                            <DetailsNumber>#{props.pokemon.id}</DetailsNumber>
                            <DetailsName>{props.pokemon.name}</DetailsName>
                            <TypeDetails>
                                {props.pokemon.types.map(index => {
                                    return (
                                        <TypeImageDetails key={index.id} src={require(`../img/types/${index.type.name}.png`)} />
                                    )
                                })}
                            </TypeDetails>
                            <MovesContainer>
                                <Moves>Moves:</Moves>
                                {moves.slice(0,5)}
                            </MovesContainer>
                            </StatsContainer>
                            <MainImage src={`${props.pokemon.sprites.other["official-artwork"].front_default}`}/>
                            <PokeballImage src={require('../img/pokeballBackground.png')} />
                        </NameContainer>
                    </DetailsContainer>
                </GrayContainer>
            </ModalContainer>
        </CardContainer>
    )
}

export default PokeCard