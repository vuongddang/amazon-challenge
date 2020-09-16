import React, { createContext, useContext, useReducer } from 'react'

// data layer
export const StateContext = createContext();

// build a provider component to wrap our app
export const StateProvider = ({ reducer, initialState, children }) =>
    (
        // high order component
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );

// access the state value inside a component
export const useStateValue = () => useContext(StateContext);