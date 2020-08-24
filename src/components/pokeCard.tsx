import React from 'react'
import { useSelector } from 'react-redux'
import { rootStore } from '../store/store'

const PokeCard: React.FC = () => {
    const pokemonState = useSelector((state: rootStore) => state.pokemon)

    console.log(pokemonState)
    
    return (
        <div>
            {
                pokemonState.pokemon  && <section>
                <img alt="image alternative" src={pokemonState.pokemon.sprites.front_default} />
                {/* <h4>{pokemonState.pokemon.ability.map(item => {
                    return <><h5>{item.ability.name}</h5><h5>{item.ability.url}</h5></>
                })}</h4> */}
                </section>
            }
        </div>
    )
}

export default PokeCard