import { actionType } from "../types/action"

export type elementType = {
    elementId: string | null,
    elementHash: string | null,
    classList: string[] | null,
    elementTag: string | null,
    innerHTML: string  | null,
    children: HTMLElement[] | null
}

export const elementInitialState: elementType = {
    elementId: null,
    elementHash: null,
    classList: null,
    elementTag: null,
    innerHTML: null,
    children: null
}

export const elementReducer = (state: elementType, action: actionType)=>{
    switch(action.type){
        case 'SET_ELEMENT': return {...state, elementId: action.payload.elementId   };
            break;
        case 'SET_ELEMENT_TAG': return {...state, elementTag: action.payload.elementTag};
            break;
        case 'SET_ELEMENT_CLASSLIST': return {...state, classList: action.payload.classList}
            break;
        case 'SET_ELEMENT_CHILDREN': return {...state, children: action.payload.children}
            break;
        case 'SET_ELEMENT_HASH': return {...state, elementHash: action.payload.elementHash}
    }
    return state;
}