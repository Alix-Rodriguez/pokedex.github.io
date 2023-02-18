import "./pokedex.css";
import { MdCatchingPokemon } from "react-icons/md";
import { CgPokemon } from "react-icons/cg";
import { useState } from "react";
import p1 from "./assets/p1.png";
import { poke, img } from "./apiPokemon";

let bool = true;
export function Pokedex() {
  const [counter, setCounter] = useState(0);
  const [container, setContainer] = useState("container");
  const [startClose, setstartClose] = useState("Open");
  const [play, setPlay] = useState("play");
  const [centro, setCentro] = useState("h3");
  const [buscar, setBuscar] = useState(" ");
  const [adv, setAdv] = useState(" ");

  return (
    <div className={container}>
      <div className="card">
        <p className="pokewhite">
          <CgPokemon size="5rem" />
        </p>
        <div className="luces">
          <li className="li1"></li>
          <li className="li2"></li>
          <li className="li3"></li>
          <li className="li4"></li>
        </div>
        <div className="buscar">
          <input
            type="text"
            placeholder="Buscar Pokemon"
            onChange={(e) => setBuscar(e.target.value)}
          />
          <button onClick={Buscar}>Buscar</button>
          <h5 className="adv">-{adv}</h5>
        </div>
        <div className="pantalla">
          <p>{poke[counter]}</p>
          <img src={img[counter]} alt="POKEMON" />
          <img src={p1} alt="pokebola" />
        </div>
        <h3 className={centro}>
          <li className="icon">
            <MdCatchingPokemon size="5rem" color="black" />
          </li>{" "}
          Pokedex
        </h3>

        <button onClick={StartPokedex} className={play}>
          {startClose}{" "}
        </button>
        <div className="flechaD" onClick={sigue}></div>
        <div className="flechaI" onClick={ante}></div>
      </div>
    </div>
  );
  function Buscar() {
    let conver = buscar;
    conver = conver.toLowerCase();
    let p = 0;

    for (let i = 0; i < poke.length; i++) {
      if (conver === poke[i]) {
        setCounter(i);
        setAdv("Se encontro el pokemon.");
        return 1;
      }
    }
    if (p === 0) {
      setAdv("No se encontro el pokemon.");
    }
  }

  function StartPokedex() {
    if (bool) {
      bool = false;
      setContainer("container conTrans");
      setstartClose("Close");
      setPlay("play play2");
      setCentro("h3 play2");
    } else {
      setContainer("container");
      setstartClose("Open");
      setPlay("play");
      setCentro("h3");
      bool = true;
    }
  }
  function sigue() {
    setCounter(counter + 1);
  }
  function ante() {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  }
}
