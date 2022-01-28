import { createContext, useReducer } from "react"

const defaultState = {
    user: null,
    theme: 'light',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'switchTheme':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
        case 'setUser':
            return { ...state, user: action.payload }
    }
    throw Error('Unkoown action in reducer !')
}

const Context = createContext({ context: defaultState, dispatch: () => null }) // tester sans dispatch

const ContextProvider = ({ children }) => {
    const [context, dispatch] = useReducer(reducer, defaultState)
    return <Context.Provider value={{ context, dispatch }}>
        {children}
    </Context.Provider>
}

export { Context, ContextProvider }