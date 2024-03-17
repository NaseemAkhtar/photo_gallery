import cartActions from './types'
import {addTofavroute, removeTofavroute} from './logic'

const innitialState = {
    cartItems:[]
}

const cartReducer = (state = innitialState, action)=>{
    switch(action.type){
        case cartActions.ADD_ITEM : return {
            ...state,
            cartItems: addTofavroute(state.cartItems, action.payload)
        }
        case cartActions.REMOVE_ITEM : return {
            ...state,
            cartItems: removeTofavroute(state.cartItems, action.payload)
        }
        case cartActions.CLEAR_ITEMS : return {
            ...state,
            cartItems: state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
                )
        }
        default: return state
    }
}

export default cartReducer