import { pokemonType, PokemonDispatchTypes, POKEMON_FAIL, POKEMON_SUCCESS, POKEMON_LOADING } from "./types"

interface InitialStateI {
    loading: boolean,
    pokemon?: pokemonType
}

const initialState: InitialStateI = {
    loading: false
}

const Reducer = (state: InitialStateI = initialState, action: PokemonDispatchTypes): InitialStateI => {
    switch (action.type) {
        case POKEMON_FAIL:
            return {
                loading:false
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
        case POKEMON_LOADING:
            return {
                loading:true
            }
    
        default:
            return state
    }
}

export default Reducer