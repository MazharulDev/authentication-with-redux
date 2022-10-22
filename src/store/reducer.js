import { createStore } from "redux";

const initialState = {
    users: [{
        userName: "admin",
        password: "Test12345"
    }],
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
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}
export default createStore(reducer)