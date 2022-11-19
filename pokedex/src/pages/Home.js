import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PokeCard from './PokeCard'
import { Background, Title, MapContainer, ModalContainer, Modal, Modal2, Modal2Delete, ModalDelete, ModalContainerDelete, CloseButton, DarkContainer, LoadMoreButton } from './StyledComponents/HomeStyled'
import { GlobalContext } from '../Global/GlobalContext'
import Header from '../Global/Header/Header'

export const Context = createContext()

const Home = () => {
    const navigate = useNavigate()

    const goToMyPokemon = () => {
        navigate("myPokemon")
    }

    const [details, setDetails] = useState('none')

    const [modal, setModal] = useState('none')
    const closeModal = () => {
        setModal('none')
    }

    const { myPokemon, setMyPokemon } = useContext(GlobalContext)
    const capturePokemon = (id) => {
        let list = [...myPokemon]
        list.push(id)
        setMyPokemon([...new Set(list)])
        setModal('block')
    }

    const [pokemon, setPokemon] = useState([]);
    const [nextPage, setNextPage] = useState(`https://pokeapi.co/api/v2/pokemon?limit=21`);
    const [pokemonList, setPokemonList] = useState([])

    async function getPokemonUrl(pokeList) {
        var list = [...pokemon]
        for (let i = 0; i < pokeList.length; i++) {
            const result = await axios.get(pokeList[i].url)
            const resultData = result.data
            list.push(resultData)
        }
        setPokemon(list)
    }

    const getPokemon = async () => {
        axios
            .get(nextPage)
            .then((response) => {
                setPokemonList(response.data.results)
                setNextPage(response.data.next)
                getPokemonUrl(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const verifyPokemon = (id) => {
        for (let index = 0; index < myPokemon.length; index++) {
            if (myPokemon[index] === id) {
                return true
            }
        }
        return false
    }

    useEffect(() => {
        getPokemon()
    }, [])

    const pokemap = pokemon.map(index => {
            return <PokeCard capturePokemon={capturePokemon} pokemon={index} key={index.id} verifyPokemon={verifyPokemon(index.id)} />
        })
    console.log(pokemon)

    return (
        <Background>
            <Header/>
            <MapContainer>
                <Title>Todos os Pokémon</Title>
                {pokemap}
            </MapContainer>
            <LoadMoreButton onClick={getPokemon}>Procurar mais Pokemon</LoadMoreButton>
            <ModalContainer modal={modal}>
                <DarkContainer>
                    <Modal>Gotcha!</Modal>
                    <Modal2>O Pokémon foi adicionado à sua Pokedéx</Modal2>
                    <CloseButton onClick={closeModal}>Fechar</CloseButton>
                </DarkContainer>
            </ModalContainer>
        </Background>
    )
}

export default Home
