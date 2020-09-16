export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'
export const initialState = {
    basket: [
        {
            id: "1",
            title: "Hape Pound & Tap Bench with Slide Out Xylophone - …ding Toy for Toddlers, Multifunctional and Bright", 
            image: "https://images-na.ssl-images-amazon.com/images/I/61HyZoM8ZqL._AC_SL1171_.jpg",
            price: 25.62,
            rating: 5,
        }
    ],
    //...
}

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case REMOVE_FROM_BASKET:
            const newBasket = [...state.basket]
            const index = newBasket.findIndex(item => item.id === action.item.id);
            if(index >=0 ) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: [...newBasket]
            };

        default:
            return state;
    }
}

export default reducer;