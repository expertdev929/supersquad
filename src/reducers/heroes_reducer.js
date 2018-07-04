import { createCharacter } from './helpers'
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'

function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return [...state, createCharacter(action.id)]
        case REMOVE_CHARACTER:
            return state.filter(c => c.id !== action.id)
        default:
            return state
    }
}

export default heroes