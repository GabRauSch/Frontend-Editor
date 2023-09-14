import { actionType } from "../types/action"

export type visibleType = {
    visible: boolean
}

export const visibleInitialState: visibleType = {
    visible: false
}

export const visibleReducer = (state: visibleType, action: actionType)=>{
    switch(action.type){
        case 'TOGLE_VISIBILITY': return {...state, visible: !state.visible} 
            break;
    }
    return state;
}