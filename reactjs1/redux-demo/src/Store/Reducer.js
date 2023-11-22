const initialState = {
    message: "subscribe to imarticus"
};

const reducer = (state = initialState, action) => {
    const newState = { ...state};  //...state = state tree  = state manangement
    if(action.type === "message_change") 
    newState.message = "Thank you for Subscribing";
return newState;
};

export default reducer;