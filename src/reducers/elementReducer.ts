import { actionType } from "../types/action"

export type elementType = {
    element: HTMLElement | null,
    classList: string[] | null
}

export const elementInitialState: elementType = {
    element: null,
    classList: null
}

export const elementReducer = (state: elementType, action: actionType)=>{
    switch(action.type){
        case 'SET_ELEMENT': return {...state, element: action.payload.element} 
            break;
    }
    return state;
}