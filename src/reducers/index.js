const initialState = {
    username: ''
};

export default function userstate(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload }

        default:
            return state;
    }
}