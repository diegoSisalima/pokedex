import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/PokemonCard.css";

const PokemonCard = ({ url }) => {
  const [pokemonData, setPokemonData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemonData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    navigate(`/pokedex/${pokemonData.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`pokemon-card bg-${pokemonData?.types[0].type.name}`}
    >
      <div className="img-containr">
        <img
          src={pokemonData?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </div>
      <h2>{pokemonData?.name}</h2>
      <section className="types">
        {pokemonData?.types.map((item) => (
          <p>{item.type.name}</p>
        ))}
      </section>
      <section className="stats">
        <div className="atack">
          <p>{pokemonData?.stats?.[1].stat.name}</p>
          <p>{pokemonData?.stats?.[1].base_stat}</p>
        </div>
        <div className="hp">
          <p>{pokemonData?.stats?.[0].stat.name}</p>
          <p>{pokemonData?.stats?.[0].base_stat}</p>
        </div>
        <div className="defense">
          <p>{pokemonData?.stats?.[2].stat.name}</p>
          <p>{pokemonData?.stats?.[2].base_stat}</p>
        </div>
        {/* <div className="speed">
          <p>{pokemonData?.stats?.[5].stat.name}</p>
          <p>{pokemonData?.stats?.[5].base_stat}</p>
        </div> */}
      </section>
    </div>
  );
};

export default PokemonCard;
