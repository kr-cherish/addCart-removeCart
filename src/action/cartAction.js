

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const UPDATE_CART = 'UPDATE_CART';


export const add_to_cart = (product) => ({
    type : ADD_TO_CART,
    payload : product,
});


export const remove_cart = (id) => ({
    type : REMOVE_CART,
    payload : id,
})

export const update_cart = (id, quantity) => ({
    type : UPDATE_CART,
    payload : {id, quantity}
})                  