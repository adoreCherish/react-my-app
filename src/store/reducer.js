import { CHANGE_VALUE } from './actionTypes.js';
const defaultState = {
    title: 'React'
};
function reducer( state = defaultState , action ) {
    if ( action.type === CHANGE_VALUE ) {
        const newState = JSON.parse(JSON.stringify(state));
        Object.assign(newState, action)
        console.log(newState)
        return newState;
    }
    return state;
}
export default reducer;