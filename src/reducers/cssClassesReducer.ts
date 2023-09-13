import { actionType } from "../types/action"

export type cssClassesType = {
    cssClasses: {
        name: string,
        styles: string[]
    }[]
}

export const cssClassesInitialState: cssClassesType = {
    cssClasses: [
        {
            name: "user-header-template", 
            styles: ["min-height:100px","display: flex","justify-content: space-between","align-items: center"]
        },
        {
            name: "user-main-template", 
            styles: ["flex: 1"," padding: 20px"," display: flex"] 
        },
        {
            name: "user-footer-template", 
            styles: ["min-height: 100px"," padding: 20px"," display: flex"," justify-content: center"] 
        },
        {
            name: "user-aside-template", 
            styles: ["width: 200px"," justify-self: flex-end"] 
        },
        {
            name: "user-dragging-over", 
            styles: ["background-color:  #E0FfE0"] 
        },
        {
            name: "user-container-template", 
            styles: [" width: 1200px"," min-height: 10px"," padding: 10px"," display: flex"," justify-content: center"] 
        },
        {
            name: "user-div-template", 
            styles: ["padding: 10px"," display: flex"," width: fit-content"] 
        },
        {
            name: "user-input-template", 
            styles: ["height: fit-content"] 
        },
        {
            name: "user-visible-element", 
            styles: ["container-type: inline-size"] 
        },
    ]
}

export const cssClassesReducer = (state: cssClassesType, action: actionType)=>{
    switch(action.type){
        case 'ADD_CLASS': return {...state, cssClasses: [...state.cssClasses, action.payload.cssClasses]
          };
            break;
    }
    return state;
}