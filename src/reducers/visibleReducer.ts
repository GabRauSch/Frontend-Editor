import { actionType } from "../types/action"

export type userType = {
    visible: boolean
}

export const userInitialState: userType = {
    visible: false
}

export const userReducer = (state: userType, action: actionType)=>{
    switch(action.type){
        case 'SWITCH_VISIBILITY': return {...state, visible: action.payload.visible} 
            break;
    }
    return state;
}