import { PokemonGrid, PokeResponse, SimplePokemon } from "@/pokemons"

const getPokemons = async ( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
  const data: PokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json() )

  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name
  }))
  
  return pokemons
}


export const metadata = {
  title: 'Pokemon List',
  description: 'In this site you could find a large list of pokemons',
}

export default async function PokemonPage() {

  const pokemons = await getPokemons(150)
  

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-3 font-semibold text-center">Listado de Pokemons <small>estático</small></span>
      <PokemonGrid pokemons={ pokemons } />
    </div>
  );
}