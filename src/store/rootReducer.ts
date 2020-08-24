import { combineReducers } from 'redux'
import Reducer from './pokemonData/reducer'



const RootReducer = combineReducers({
    pokemon: Reducer
})

export default RootReducer