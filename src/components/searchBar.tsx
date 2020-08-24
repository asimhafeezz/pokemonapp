import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemon } from '../store/pokemonData/action'


//css
let inputStyle: React.CSSProperties = {
    padding: '.5rem .5rem',
    fontSize:'1.1rem'
}

let divStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height:'30vh'
}

let buttonStyle: React.CSSProperties = {
    padding: '.2rem .8rem',
    fontSize: '1.2rem',
    letterSpacing: '.1rem',
    cursor:'pointer'
}


//interfaces
interface RootI {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
    
}


const SearchBar: React.FC<RootI> = ({ value, setValue }) => {
    
    let dispatch = useDispatch()

    let onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    let onButtonClick = () => {
        
        dispatch(getPokemon(value))
    }

    return (
        <div style={divStyle}>
            <input type="text" onChange={onHandleChange} value={value} style={inputStyle} />
            <button type="button" onClick={onButtonClick} style={buttonStyle}>Search</button>
        </div>
    )

}

export default SearchBar