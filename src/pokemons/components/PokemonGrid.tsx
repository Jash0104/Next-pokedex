import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard"

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center mx-2 max-w-full">

        { 
          pokemons.map( pokemon => {
            return (
              <PokemonCard key={pokemon.id} pokemon={ pokemon } />  
            )
          }) 
        }
    </div>
  )
}
