import "./App.css";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import TrainerLogin from "./pages/TrainerLogin";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PokemonDetail from "./pages/PokedexID";

function App() {
  const trainerName = useSelector((state) => state.trainerNameSlice);
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Routes>
        <Route path="/" element={<TrainerLogin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
