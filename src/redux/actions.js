// String constants
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

// Action creators
export const addMessage = (text) => ({type: ADD_MESSAGE, text});

export const removeMessage = (deletedMessage) => ({type: REMOVE_MESSAGE, id: deletedMessage.id});

