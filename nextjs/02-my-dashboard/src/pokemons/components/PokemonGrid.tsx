import Image from "next/image"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard"

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap grap-10 items-center justify-center">
      {pokemons.map(({ id, name }) => (
        /*<Image
          key={id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={name}
          width={100}
          height={100}
        />*/
        <PokemonCard key={id} />
      ))}
    </div>
  )
}
