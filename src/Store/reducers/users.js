import { POPULATE_PROFILE } from "Constant/Type/user";

const initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {
        case POPULATE_PROFILE:
            return action.payload;
        default:
        return  state;
    }
}