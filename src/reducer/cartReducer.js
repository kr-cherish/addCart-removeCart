import { ADD_TO_CART, REMOVE_CART, UPDATE_CART } from "../action/cartAction";

const initialstate = {
    cart : []
}

const cartReducer = (state = initialstate, action) => {
    switch(action.type){
        case  ADD_TO_CART :
            const existingProduct = state.cart.find((item) => item.id === action.payload.id );
            if(existingProduct){
                return {
                    ...state,
                    cart : state.cart.map((item)=>
                        item.id === action.payload.id ? {...item, quantity : item.quantity+1} : item
                    ),
                };
            } 
            else{
                return{
                    ...state,
                    cart : [...state.cart,{...action.payload,quantity : 1}],
                };
            }
        case REMOVE_CART : 
        return {
            ...state,
            cart: state.cart
              .map((item) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity - 1 } 
                  : item
              )
              .filter((item) => item.quantity > 0),
          };
        case UPDATE_CART : 
            return{
                ...state,
                cart : state.cart.map((item)=>
                    item.id === action.payload.id ? {...state, quantity : action.payload.quantity} : item
                ),
            };
        default : 
            return state;
    }
};

export default cartReducer;