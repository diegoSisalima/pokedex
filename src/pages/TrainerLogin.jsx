import "./css/TrainerLogin.css";
import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";

const TrainerLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(e.target.input.value.trim()));
    e.target.input.value = "";
    navigate("/pokedex");
  };

  return (
    <div className="trainer-login">
      <h2>Hello trainer!</h2>
      <p>Give me your name to start</p>
      <form onSubmit={submit} className="single-input">
        <input type="text" id="input" placeholder="write your name to start" />
        <button>Start</button>
      </form>
      <img src="/ash.png" alt="" />
    </div>
  );
};

export default TrainerLogin;
