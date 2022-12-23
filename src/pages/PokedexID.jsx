import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/PokedexID.css";

const PokemonID = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemonData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className={`pokedexid txt-shadow`}>
      <section>
        <fieldset className={`bg-${pokemonData?.types[0].type.name}`}>
          <legend className={`bg-${pokemonData?.types[0].type.name}`}>
            <h2>{pokemonData?.name}</h2>
            <p>Pokemon #{pokemonData?.id}</p>
          </legend>
          <img
            src={pokemonData?.sprites?.other["official-artwork"].front_default}
            alt=""
          />
          <ul>
            <li className="detailWeigth">
              Weigth: <br /> {pokemonData?.weight / 10} kg
            </li>
            <li className="detailHeigt">
              Height: <br />
              {pokemonData?.height / 10} m
            </li>
          </ul>
        </fieldset>
        <section className={`container_type_habilities`}>
          <div className={`type`}>
            <h2>Types</h2>
            <ul>
              {pokemonData?.["types"].map((item) => (
                <li key={item.type.name} className={`bg-${item.type.name}`}>
                  {item.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="habilities">
            <h2>Habilities</h2>
            <ul>
              {pokemonData?.["abilities"].map((elemento) => (
                <li key={elemento.ability.name} className="habilitiesName">
                  {elemento.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={`stats-base-container `}>
          <h2>Stats</h2>
          <div className="atack statsDetail">
            <p className="stat-name">{pokemonData?.stats?.[1].stat.name}:</p>
            <progress
              min="0"
              max="150"
              value={pokemonData?.stats?.[1].base_stat}
            />
            <p>{pokemonData?.stats?.[1].base_stat} / 150</p>
          </div>
          <div className="atack-special statsDetail">
            <p className="stat-name">{pokemonData?.stats?.[3].stat.name}:</p>
            <progress
              min="0"
              max="150"
              value={pokemonData?.stats?.[3].base_stat}
            />
            <p>{pokemonData?.stats?.[3].base_stat} / 150</p>
          </div>
          <div className="hp statsDetail">
            <p className="stat-name">{pokemonData?.stats?.[0].stat.name}:</p>
            <progress
              min="0"
              max="150"
              value={pokemonData?.stats?.[0].base_stat}
            />
            <p>{pokemonData?.stats?.[0].base_stat} / 150</p>
          </div>
          <div className="defense statsDetail">
            <p className="stat-name">{pokemonData?.stats?.[2].stat.name}:</p>
            <progress
              min="0"
              max="150"
              value={pokemonData?.stats?.[2].base_stat}
            />
            <p>{pokemonData?.stats?.[2].base_stat} / 150</p>
          </div>
          <div className="defense statsDetail">
            <p className="stat-name">{pokemonData?.stats?.[4].stat.name}:</p>
            <progress
              min="0"
              max="150"
              value={pokemonData?.stats?.[4].base_stat}
            />
            <p>{pokemonData?.stats?.[4].base_stat} / 150</p>
          </div>
          <div className="speed statsDetail">
            <p className="stat-name">{pokemonData?.stats?.[5].stat.name}:</p>
            <progress
              min="0"
              max="150"
              value={pokemonData?.stats?.[5].base_stat}
            />
            <p>{pokemonData?.stats?.[5].base_stat} / 150</p>
          </div>
        </section>
      </section>
      <section className={`movements `}>
        <h2>Movements</h2>
        <ul className={`bg-${pokemonData?.types[0].type.name}`}>
          {pokemonData?.["moves"].map((elemento) => (
            <li key={elemento.move.name} className="movesName">
              {elemento.move.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PokemonID;
