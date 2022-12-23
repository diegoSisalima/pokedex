import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import "./css/Pokedex.css";

const Pokedex = () => {
  const { trainerNameSlice } = useSelector((state) => state);
  const [apiData, setApiData] = useState();
  const [typeData, setTypeData] = useState();
  const [selectType, setSelectType] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    if (selectType === "all") {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=9999&offset=0/")
        .then((res) => setApiData(res.data.results))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(selectType)
        .then((res) => setApiData(res.data.pokemon.map((e) => e.pokemon)));
    }
  }, [selectType]);
  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${e.target.input.value.trim().toLowerCase()}/`);
  };
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypeData(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => {
    setSelectType(e.target.value);
    setPage(1);
  };
  /*pagination*/
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(20);
  const initialPoke = (page - 1) * pokePerPage;
  const finalPoke = page * pokePerPage;
  const maxPage = apiData && Math.ceil(apiData.length / pokePerPage);

  return (
    <div className="pokedex">
      <h3>Welcome {trainerNameSlice},</h3>
      <h4>here you can find your favorite pokemon</h4>
      <form className="input" onSubmit={submit}>
        <input type="text" id="input" placeholder="Search pokemon by name" />
        <button>
          <i className="bx bx-search-alt-2"></i>
        </button>
      </form>
      <select className="select" onChange={handleChange}>
        <option value="all">All types</option>
        {typeData?.map((item) => (
          <option key={item.url} value={item.url}>
            {item.name}
          </option>
        ))}
      </select>
      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
      <ul className="card-container flex-galery">
        {apiData?.slice(initialPoke, finalPoke).map((item) => (
          <PokemonCard key={item.url} url={item.url} />
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
