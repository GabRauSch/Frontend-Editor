import { actionType } from "../types/action"

export type parentType = {
    id: string
}

export const parentInitialState: parentType = {
    id: 'page-view-body'
}

export const parentReducer = (state: parentType, action: actionType)=>{
    switch(action.type){
        case 'SET_PARENT': return {...state, id: action.payload.id} 
            break;
    }
    return state;
}