import {createContext, useReducer, ReactNode} from 'react';
import { userInitialState, userReducer, userType } from "../reducers/userReducer";
import { actionType } from '../types/action';
import { elementInitialState, elementReducer, elementType } from '../reducers/elementReducer';
import { parentInitialState, parentReducer, parentType } from '../reducers/parentReducer';
import { cursorInitialState, cursorReducer, cursorType } from '../reducers/cursorReducer';
import { computedInitialState, computedReducer, computedType } from '../reducers/computedReducer';
import { cssClassesInitialState, cssClassesReducer, cssClassesType } from '../reducers/cssClassesReducer';
import { componentInitialState, componentReducer, componentType } from '../reducers/componentsReducer';

type initialStateType = {
    user: userType;
    element: elementType,
    parent: parentType,
    cursor: cursorType,
    computed: computedType,
    cssClasses: cssClassesType,
    component: componentType
}

type contextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    user: userInitialState,
    element: elementInitialState,
    parent: parentInitialState,
    cursor: cursorInitialState,
    computed: computedInitialState,
    cssClasses: cssClassesInitialState,
    component: componentInitialState
}

export const Context = createContext<contextType>({
    state: initialState,
    dispatch: ()=>null
})

const mainReducer = (state: initialStateType, action: actionType)=>({
    user: userReducer(state.user, action),
    element: elementReducer(state.element, action),
    parent: parentReducer(state.parent, action),
    cursor: cursorReducer(state.cursor, action),
    computed: computedReducer(state.computed, action),
    cssClasses: cssClassesReducer(state.cssClasses, action),
    component: componentReducer(state.component, action)
})

export const ContextProvider: React.FC<{children: ReactNode }> = ({children})=>{
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
} 