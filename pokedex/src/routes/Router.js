import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import MyPokemon from '../pages/MyPokemon'
import PokemonDetails from '../pages/PokemonDetails'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="mypokemon" element = {<MyPokemon />} />
                <Route path="pokemon/details/:name" element = {<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
