import React, { useContext } from 'react'
import { DeleteButton, CardContainer, CardImage, DetailsButton, FirstContainer, Name, PokeballBackground, Teste, TypeContainer, TypeImage, CloseButton, GrayContainer, DetailsTitle, DetailsContainer, ImageContainer, DetailImage, InfoContainer, ColumnContainer, DetailsStats, StatsName, StatsNumber, NameContainer, StatsContainer, DetailsNumber, DetailsName, TypeDetails, TypeImageDetails, MovesContainer, Moves, MainImage, PokeballImage, ModalContainer, MovesBackground, MovesSlice } from './StyledComponents/CardStyled'
import { GlobalContext } from '../Global/GlobalContext'
import ProgressBar from '../Global/ProgressBar/ProgressBar'
import { useState } from 'react'


const PokeCard = (props) => {
    const { myPokemon, setMyPokemon } = useContext(GlobalContext)
    const { myPokemonList, setMyPokemonList } = useContext(GlobalContext)
    const deletePokemon = (id) => {
        var list = [...myPokemon]
        var myList = [...myPokemonList]
        for (var index = 0; index < list.length; index++) {
            if (list[index] === id) {
                list.splice(index, 1);
            }
        }
        for (var index = 0; index < myList.length; index++) {
            if (myList[index].id === id) {
                myList.splice(index, 1);
            }
        }
        setMyPokemon(list)
        setMyPokemonList(myList)
        props.changeModalDelete()
    }

    const goToPokemonDetails = () => {
        setModal('block')
    }

    const [modal, setModal] = useState('none')
    const closeModal = () => {
        setModal('none')
    }

    const moves = props.pokemon.moves.map((move) => {
        return (
            <MovesBackground key={move.move.name}>
            <MovesSlice>{move.move.name}</MovesSlice>
            </MovesBackground>
        )
    })

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
                    <DeleteButton onClick={() => deletePokemon(props.pokemon.id)}>Excluir!</DeleteButton>
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
                                        {moves.slice(0, 5)}
                                    </MovesContainer>
                                </StatsContainer>
                                <MainImage src={`${props.pokemon.sprites.other["official-artwork"].front_default}`} />
                                <PokeballImage src={require('../img/pokeballBackground.png')} />
                            </NameContainer>
                        </DetailsContainer>
                    </GrayContainer>
                </ModalContainer>
            </CardContainer>
        </div>

    )
}

export default PokeCard
