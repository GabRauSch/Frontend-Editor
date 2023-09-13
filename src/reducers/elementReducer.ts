import { actionType } from "../types/action"

export type elementType = {
    elementId: string | null,
    classList: string[] | null,
    elementTag: string | null,
    innerHTML: string  | null
}

export const elementInitialState: elementType = {
    elementId: null,
    classList: null,
    elementTag: null,
    innerHTML: null
}

export const elementReducer = (state: elementType, action: actionType)=>{
    switch(action.type){
        case 'SET_ELEMENT': return {...state, elementId: action.payload.elementId   };
            break;
        case 'SET_ELEMENT_TAG': return {...state, elementTag: action.payload.elementTag};
            break;
        case 'SET_ELEMENT_CLASSLIST': return {...state, classList: action.payload.classList}
    }
    return state;
}