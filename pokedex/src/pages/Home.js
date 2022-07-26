import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PokeCard from './PokeCard'
import { Background, Header, InvisibleButton, LogoPokemon, PokedexButton, Title, MapContainer, LoadMoreButton, ModalContainer, Modal, Modal2, Modal2Delete, ModalDelete, ModalContainerDelete } from './StyledComponents/HomeStyled'

export default function Home() {
    const navigate = useNavigate()

    const goToMyPokemon = () => {
        navigate("myPokemon")
    }
    
    const [modal, setModal] = useState('none')
    const changeModal = () => {
        setModal('block')
    }
    const closeModal = () => {
        setModal('none')
    }

    const [modalDelete, setModalDelete] = useState('none')
    const changeModalDelete = () => {
        setModalDelete('block')
    }
    const closeModalDelete = () => {
        setModal('none')
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
            .get(await nextPage)
            .then((response) => {
                setPokemonList(response.data.results)
                setNextPage(response.data.next)
                getPokemonUrl(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <Background>
            <Header>
                <InvisibleButton>Voltar</InvisibleButton>
                <LogoPokemon src={require('../img/pokemon.png')} />
                <div>
                    <PokedexButton onClick={goToMyPokemon}>Pokedéx</PokedexButton>
                </div>
            </Header>
            <Title>Todos os Pokémon</Title>
            <MapContainer>
                {pokemon.map(index => {
                    return <PokeCard pokemon={index} key={index.id} />
                })}
            </MapContainer>
            <LoadMoreButton onClick={getPokemon}>Procurar mais Pokemon</LoadMoreButton>
            <br></br>
            <br></br>
            <ModalContainer modal = {modal}>
                    <Modal>Gotcha!</Modal>
                    <Modal2>O Pokémon foi adicionado à sua Pokedéx</Modal2>
            </ModalContainer>
            <ModalContainerDelete modalDelete={modalDelete}>
                    <ModalDelete >Oh no!</ModalDelete>
                    <Modal2Delete>O Pokémon foi removido da sua Pokedéx</Modal2Delete>
            </ModalContainerDelete>
        </Background>
    )
}
