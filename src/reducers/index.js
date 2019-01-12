import * as types from '../actions/actionType';

const initialState={
    color:"block",
    number:0
};

const Counter = (state = initialState,action) => {
    switch (action.type){
        case types.INCREMENT:
            return{
                ...state,
                number:state.number + 1
            };
        case types.DECREMENT:
            return{
                ...state,
                number:state.number - 1
            };
        case types.SET_COLOR:
            return {
                ...state,
                color:action.color
            };
        default :
            return{
                state
            }
    }
}

export default Counter;