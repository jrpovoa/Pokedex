import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Background,
  CloseButton,
  DarkContainer,
  Modal2Delete,
  ModalContainerDelete,
  ModalDelete,
  Title,
} from "./StyledComponents/MyPokemonStyled";
import { GlobalContext } from "../Global/GlobalContext";
import axios from "axios";
import MyPokeCard from "./MyPokeCard";
import { MapContainer } from "./StyledComponents/HomeStyled";
import Header from "../Global/Header/Header";

const MyPokemon = () => {
  const navigate = useNavigate();
  const goToAllPokemon = () => {
    navigate("../");
  };
  const { myPokemon, setMyPokemon } = useContext(GlobalContext);
  const { myPokemonList, setMyPokemonList } = useContext(GlobalContext);

  const [modalDelete, setModalDelete] = useState("none");
  const changeModalDelete = () => {
    setModalDelete("block");
  };
  const closeModalDelete = () => {
    setModalDelete("none");
  };

  async function getPokemon() {
    var list = [];
    for (let i = 0; i < myPokemon.length; i++) {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${myPokemon[i]}`
      );
      const resultData = result.data;
      list.push(resultData);
    }
    setMyPokemonList(list);
  }

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <Background>
      <Header/>
      <Title>Meus Pokémon</Title>
      <MapContainer>
        {myPokemonList.map((index) => {
          return (
            <MyPokeCard
              pokemon={index}
              key={index.id}
              changeModalDelete={changeModalDelete}
            />
          );
        })}
      </MapContainer>
      <ModalContainerDelete modalDelete={modalDelete}>
        <DarkContainer>
          <ModalDelete>Oh no!</ModalDelete>
          <Modal2Delete>O Pokémon foi removido da sua Pokedéx</Modal2Delete>
          <CloseButton onClick={closeModalDelete}>Fechar</CloseButton>
        </DarkContainer>
      </ModalContainerDelete>
    </Background>
  );
}

export default MyPokemon
