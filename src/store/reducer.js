import { createStore } from "redux";

const initialState = {
    users: [],
    loginUser: null,
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        default:
            return state;
    }
}
export default createStore(reducer)