import { Move, Pokemon, PokeMove, PokeResponse } from '@/pokemons';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Image from 'next/image';
import style from '@/pokemons/pokemonType.module.css'

interface Props {
    params: { name: string }
}


export async function generateStaticParams() {

  const pokemon: PokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {
      next: {
        revalidate: 60 * 60 * 30 * 6
      }
  }).then(res => res.json())

  return pokemon.results.map(pokemon => ({ name: pokemon.name }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemonByName(params.name);
  
    return {
      title: `#${ id } - ${ name }`,
      description: `Page for Pokemon ${ name }`
    }
    
  } catch (error) {
    return {
      title: 'Pokemon Not Found',
      description: 'Pokemon page when something went wrong'
    }
  }
}

const getPokemonByName = async ( name: string ): Promise<Pokemon> => {
    try {
        const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            // cache: 'force-cache', // TODO: cambiarlo en un futuro
            next: {
              revalidate: 60 * 60 * 30 * 6
            }
        }).then(res => res.json())
    
        return pokemon
        
    } catch (error) {
        notFound()
    }
}

const getPokemonMovementType = async ( moves: Move[] ) => {
	const movesTypePromises: Promise<PokeMove>[] = moves.map( move => {
		const pokeMove = fetch(move.move.url)
			.then(res => res.json())
		
		return pokeMove
	})

	const movesType = (await Promise.all( movesTypePromises )).map(( { type }, index) => ({
		type: type.name,
		name: moves[index].move.name
	}))

	return movesType
}

export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemonByName(params.name);
    const moveTypes = await getPokemonMovementType( pokemon.moves )

    return (
      <div className="flex mt-5 flex-col items-center text-slate-800">
        <div className="relative flex flex-col items-center rounded-[20px] w-[75%] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
          <div className="mt-2 mb-8 w-full">
            <h1 className="px-2 text-2xl font-bold text-slate-700 capitalize">
              #{pokemon.id} {pokemon.name}
            </h1>
            <div className="flex flex-col justify-center items-center">
              {
                pokemon.sprites.other?.dream_world.front_default ?
                    <Image
                      src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                      width={150}
                      height={150}
                      alt={`Imagen del pokemon ${pokemon.name}`}
                      className="mb-5"
                    />
                : pokemon.sprites?.front_default &&
                    <Image
                      src={pokemon.sprites?.front_default ?? ''}
                      width={150}
                      height={150}
                      alt={`Imagen del pokemon ${pokemon.name}`}
                      className="mb-5"
                    />
              }
  
              <div className="flex flex-wrap px-2 mt-4 justify-center">
                {
                  moveTypes.map(move => (
                    <p key={move.name} className={`mr-2 py-1 px-3 m-1 rounded text-white capitalize ${ move.type && style[move.type]} hover:scale-105 transition-all duration-300 ease-in-out`}>{move.name}</p>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full">
  
            <div className="flex flex-col items-start justify-center rounded-lg bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Types</p>
              <div className="text-base font-medium text-navy-700 flex">
                {
                  pokemon.types.map(type => (
                    <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                  ))
                }
              </div>
            </div>
  
            <div className="flex flex-col items-start justify-center rounded-lg bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Peso</p>
              <span className="text-base font-medium text-navy-700 flex">
                {
                  pokemon.weight
                }
              </span>
            </div>
  
            <div className="flex flex-col justify-center rounded-lg bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Regular Sprites</p>
              <div className="flex justify-center">
                {
                  pokemon.sprites.front_default &&
                  <Image
                    src={pokemon.sprites.front_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                }
                {
                  pokemon.sprites.back_default &&
                  <Image
                    src={pokemon.sprites.back_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                }
  
              </div>
            </div>
  
            <div className="flex flex-col justify-center rounded-lg bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Shiny Sprites</p>
              <div className="flex justify-center">
                {
                  pokemon.sprites.front_shiny &&
                  <Image
                    src={pokemon.sprites.front_shiny}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                }
                {
                  pokemon.sprites.back_shiny && 
                  <Image
                    src={pokemon.sprites.back_shiny}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}