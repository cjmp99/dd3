import { GET_LIST, SELECTED_PROPERTY } from "./types"

export const initialState = {
    property: null,
    listProperties: [],
    type: 'buy'
}

export function Dd3Reducer(state = initialState, action) {
    switch (action.type) {

        case SELECTED_PROPERTY:
            return {
                ...state,
                property: action.payload
            }
        
        case GET_LIST:
            return {
                ...state,
                listProperties: action.payload
            }

        default:
            return state;
    }
}