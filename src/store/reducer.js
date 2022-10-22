import { createStore } from "redux";

const initialState = {
    users: [],
    loginUser: null,
    user: [
        {
            id: 1,
            name: "Mazharul Islam",
            email: "miforbd@gmail.com"
        },
        {
            id: 2,
            name: "Faisal",
            email: "faisal@gmail.com"
        },
        {
            id: 3,
            name: "Maria Islam",
            email: "maria@gmail.com"
        }
    ],
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