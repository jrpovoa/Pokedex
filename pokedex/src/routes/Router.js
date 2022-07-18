import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Home from '../pages/Home'
import MyPokemon from '../pages/MyPokemon'
import PokemonDetails from '../pages/PokemonDetails'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Home/>} />
                    <Route path="mypokemon" element = {<MyPokemon/>} />
                    <Route path="pokemon/details" element = {<PokemonDetails/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
