import { Dispatch } from 'redux'
import { PokemonDispatchTypes, POKEMON_LOADING, POKEMON_SUCCESS, POKEMON_FAIL } from './types'

import axios from 'axios'

export const getPokemon = (pokemon: String) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {

    dispatch({
        type: POKEMON_LOADING
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: POKEMON_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log('error occured during gettting pokemon from api', err)
            dispatch({
                type:POKEMON_FAIL
            })
        })
    
}