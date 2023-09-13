import { typeOptions } from "@testing-library/user-event/dist/type/typeImplementation"
import { actionType } from "../types/action"

export type componentType = {
    components: {
        name: string,
        props: {[key: string]: string}[],
        elementsIdsList: string[]
    }[]
}

export const componentInitialState: componentType = {
    components: []
}

export const componentReducer = (state: componentType, action: actionType)=>{
    switch(action.type){
        case 'ADD_COMPONENT':
            return {
                ...state,
                components: [...state.components, action.payload.component]
            }
            break;
    }
    return state;
}