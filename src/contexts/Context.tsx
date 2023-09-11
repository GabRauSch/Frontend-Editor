import {createContext, useReducer, ReactNode} from 'react';
import { userInitialState, userReducer, userType } from "../reducers/userReducer";
import { actionType } from '../types/action';
import { elementInitialState, elementReducer, elementType } from '../reducers/elementReducer';

type initialStateType = {
    user: userType;
    element: elementType
}

type contextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}



const initialState = {
    user: userInitialState,
    element: elementInitialState
}

export const Context = createContext<contextType>({
    state: initialState,
    dispatch: ()=>null
})

const mainReducer = (state: initialStateType, action: actionType)=>({
    user: userReducer(state.user, action),
    element: elementReducer(state.element, action)
})

export const ContextProvider: React.FC<{children: ReactNode }> = ({children})=>{
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
} 