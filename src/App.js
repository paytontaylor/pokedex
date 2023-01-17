import Pokecard from "./components/Pokecard";
import pokedex from "./components/Pokedex";
import PokecardCSS from "./components/Pokecard.css";

export default function App(){
    return (
        pokedex.map(p => {
            return <Pokecard key={p.id} name={p.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} type={p.type} exp={p.base_experience}/>
        })
    )
}