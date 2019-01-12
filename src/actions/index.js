import * as types from './actionType';

export const increment = () => ({type:types.INCREMENT});
export const decrementt = () => ({type:types.DECREMENT});
export const setColor = (color) => ({
    type:types.SET_COLOR,
    color
});