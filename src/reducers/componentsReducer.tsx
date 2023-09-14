import { actionType } from "../types/action"

export type componentType = {
    components: {
        id: number,
        hash: string,
        parentHash: string,
        position: number,
        tag: string,
        cloneSiblings: number,
        innerHTML: string | undefined,
        isComponent: number,
        name: string,
        props: null,
        classList: string[]
    }[]
}

export const componentInitialState: componentType = {
    components: []
}

export const componentReducer = (state: componentType, action: actionType)=>{
    switch(action.type){
        case 'CREATE_COMPONENT':
            return {
                ...state,
                components: [...state.components, action.payload.component]
            }
            break;
        case 'CHANGE_TO_COMPONENT':
            const componentIndex = state.components.findIndex(component => component.id === action.payload.id); 
            const updatedComponent = {
                ...state.components[componentIndex],
                isComponent: 1,
                name: action.payload.name
              };
            const updatedComponents = [...state.components];
            updatedComponents[componentIndex] = updatedComponent;
            return {
                ...state,
                components: updatedComponents,
            };
            break;
    }
    return state;
}