export const POKEMON_LOADING = 'POKEMON_LOADING'
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS'
export const POKEMON_FAIL = 'POKEMON_FAIL'

export interface pokemonType {
        ability: pokemonAbility[],
        sprites: pokemonStripes,
        stats: pokemonStat
}

export interface pokemonAbility {
    ability: {
        name: string,
        url: string
    }
}

export interface pokemonStripes {
    front_default: string
}

export interface pokemonStat {
    base_stat: number
}

export interface pokemonLoading {
    type: typeof POKEMON_LOADING
}

export interface pokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: pokemonType
}

export interface pokemonFail {
    type: typeof POKEMON_FAIL
}

export type PokemonDispatchTypes = pokemonLoading | pokemonFail | pokemonSuccess