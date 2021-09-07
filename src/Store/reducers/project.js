import {FETCH_PROJECT} from 'Constant/Type/user';

const initialState = {
    data: {}
}

export default function Project(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROJECT:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}