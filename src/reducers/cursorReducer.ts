import { actionType } from "../types/action"

export type cursorType = {
    type:string
}

export const cursorInitialState: cursorType = {
    type: 'cursor'
}

export const cursorReducer = (state: cursorType, action: actionType)=>{
    switch(action.type){
        case 'CHANGE_CURSOR': return {...state, type: action.payload.type} 
            break;
    }
    return state;
}