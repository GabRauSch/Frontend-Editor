import {createContext, useReducer, ReactNode} from 'react';
import { userInitialState, userReducer, userType } from "../reducers/userReducer";
import { actionType } from '../types/action';
import { elementInitialState, elementReducer, elementType } from '../reducers/elementReducer';
import { parentInitialState, parentReducer, parentType } from '../reducers/parentReducer';
import { cursorInitialState, cursorReducer, cursorType } from '../reducers/cursorReducer';
import { cssClassesInitialState, cssClassesReducer, cssClassesType } from '../reducers/cssClassesReducer';
import { componentInitialState, componentReducer, componentType } from '../reducers/componentsReducer';
import { visibleInitialState, visibleReducer, visibleType } from '../reducers/visibleReducer';

type initialStateType = {
    user: userType;
    element: elementType,
    parent: parentType,
    cursor: cursorType,
    cssClasses: cssClassesType,
    component: componentType
    visible: visibleType
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
    cssClasses: cssClassesInitialState,
    component: componentInitialState,
    visible: visibleInitialState
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
    cssClasses: cssClassesReducer(state.cssClasses, action),
    component: componentReducer(state.component, action),
    visible: visibleReducer(state.visible, action)
})

export const ContextProvider: React.FC<{children: ReactNode }> = ({children})=>{
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
} 