import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    cartCounter: 0,
    selectedFilter: null
}

function appReducer(appState = initialState, action) {

    switch (action.type) {
        case 'addToCart':
            return {
                ...appState,
                cartCounter: appState.cartCounter++
            }
        // case 'deleteFromCart':
        //     return { cartCounter: appState.cartCounter-- }
        case 'switchFilter':
            return {
                ...appState,
                selectedFilter: action.payload
            }
    }
} 

let store = createStore(appReducer);

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'addToCart' })

store.dispatch({ type: 'addToCart' })

store.dispatch({ type: 'switchFilter' })