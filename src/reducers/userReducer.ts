import { actionType } from "../types/action"

export type userType = {
    name: string,
    age: number
}

export const userInitialState: userType = {
    name: 'Guest',
    age: 1
}

export const userReducer = (state: userType, action: actionType)=>{
    switch(action.type){
        case 'CHANGE_NAME': return {...state, name: action.payload.name} 
            break;
        case 'CHANGE_AGE': return {...state, age: action.payload.age};
            break;
    }
    return state;
}