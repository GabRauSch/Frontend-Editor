export const setElement = (dispatch: any, elementId: string)=>{
    dispatch({
        type: "SET_ELEMENT",
        payload: {
            elementId
        }
    })
}
export const setElementTag = (dispatch: any, elementTag: string)=>{
    dispatch({
        type: "SET_ELEMENT_TAG",
        payload: {
            elementTag
        }
    })
}
export const setElementClassList = (dispatch: any, classList: string[])=>{
    dispatch({
        type: "SET_ELEMENT_CLASSLIST",
        payload: {
            classList
        }
    })
}
export const setInnerHTML = (dispatch: any, innerHTML: string)=>{
    dispatch({
        type: 'SET_INNER_HTML',
        payload: {
            innerHTML
        }
    })
}

export const setCursor = (dispatch: any, cursor: any)=>{
    dispatch({
        type: 'CHANGE_CURSOR',
        payload: {
            type: cursor
        }
    })
}

export const switchVisibility = (dispatch: any, visibility: boolean)=>{
    dispatch({
        type: 'SWITCH_VISIBILITY',
        payload: {
            visibility
        }
    })
}

export const createComputed = (dispatch: any, computed: {})=>{
    dispatch({
        type: 'ADD_COMPUTED',
        payload: {
            computed
        }
    })
}

export const createComponent = (dispatch: any, component: {})=>{
    dispatch({
        type: 'ADD_COMPONENT',
        payload: {
            component
        }
    })
}