import { useState, useEffect } from "react";
import { Pokedex } from "./estructuraPokedex";
import axios from "axios";
export let poke;
export let img;

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const loadData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then((resp) => {
      for (let i = 0; i < resp.data.results.length; i++) {
        axios.get(resp.data.results[i].url).then((result) => {
          setPokemon((previuState) => [...previuState, result.data]);
        });
      }
    });
  };

  poke = pokemon.map((pi) => {
    return pi.name;
  });
  img = pokemon.map((pi) => {
    return pi.sprites.front_default;
  });

  useEffect(loadData, []);

  return <Pokedex />;
};

export default Pokemon;
