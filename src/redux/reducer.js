import {
    ADD_MESSAGE,
    REMOVE_MESSAGE
} from './actions';

// const initialState = {
//     messages: [{text: "Hello", user: "Evan"}]
// }

export function MessagesReducer(state = [], action){
    switch(action.type) {
        case ADD_MESSAGE:
            // Our payload is an object with a "text" property captured from the form input
            // and info about the user who submitted the message
            return [...state, {text: action.text, user: 'Evan', id:Date.now()}]
        case REMOVE_MESSAGE:
            return state.filter((message) => {
                return message.id !== action.id;
            }) 
        default: return state;
    }
}

export function AnotherReducer(state = [], action){
    switch(action.type) {
        default: return state;
    }
}