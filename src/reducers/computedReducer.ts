import { actionType } from "../types/action"

export type computedType = {
    elements: {
        id: string,
        styles: string,
        position: number, //declara a posição em relação aos irmãos, permite adicionar uma div antes
        cssClasses: string[],
        innerHTML: string
    }[]
}

export const computedInitialState: computedType = {
    elements: []
}

export const computedReducer = (state: computedType, action: actionType)=>{
    switch(action.type){
        case 'ADD_COMPUTED':
            return {
                ...state,
                elements: [...state.elements, action.payload.computed]
            }
            break;
    }
    return state;
}