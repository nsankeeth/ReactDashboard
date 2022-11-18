import React, { useEffect, useState } from "react";

import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
import Card from "./Card";

function PokemonPage() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  // some utility functions to fetch pokemon data
  async function getNumberOfPokemons() {
    const resp = await fetch(baseUrl);
    const data = await resp.json();
    return data.count;
  }

  async function getPokemonByID(pokemonID) {
    const resp = await fetch(`${baseUrl}/${pokemonID}`);
    const data = await resp.json();
    console.log(data);
    return data;
  }

  async function getPokemonByIndex(pokemonIndex) {
    const resp = await fetch(`${baseUrl}?offset=${pokemonIndex}&limit=1`);
    const data = await resp.json();

    const metadata = data.results[0];
    const pokemonDataResp = await fetch(metadata.url);
    const pokemonData = await pokemonDataResp.json();

    return pokemonData;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const [data, setData] = useState(null);

  // fetch 5 random pokemon data then update state
  useEffect(async () => {
    const nPokemons = await getNumberOfPokemons();

    // generate random indexes
    var randomPokemonIndexes = [];
    for (var i = 0; i < 5; i++) {
      randomPokemonIndexes.push(getRandomInt(nPokemons));
    }

    // get pokemons data then render
    const pokemons = [];
    for (const index of randomPokemonIndexes) {
      const pokemonData = await getPokemonByIndex(index);

      // discard pokemon that doesn't have front picture
      if (pokemonData.sprites.front_default === null) continue;

      pokemons.push(pokemonData);
    }
    setData(pokemons);
  }, []);

  // render a list of pokemons based on data
  function PokemonList({ pokemons }) {
    return (
      <div>
        {pokemons.map((pokemon) => (
          <div style={{ paddingBottom: 40 }}>
            <h5>{pokemon.name}</h5>
            <img src={pokemon.sprites.front_default} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <SideMenu activeTab={"pokemon"} />
      <div className="p-2 dashboard-container">
        <Navbar />
        <div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <Card title={"Daily Random Pokemons"}>
                {data ? <PokemonList pokemons={data} /> : <p>Loading</p>}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;
