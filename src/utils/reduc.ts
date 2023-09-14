export const setElement = (dispatch: any, elementId: number)=>{
    dispatch({
        type: "SET_ELEMENT",
        payload: {
            elementId
        }
    })
}

export const setElementHash = (dispatch: any, elementHash: string)=>{
    dispatch({
        type: "SET_ELEMENT_HASH",
        payload: {
            elementHash
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
export const setInnerHTML = (dispatch: any, innerHTML: string | null)=>{
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

export const togleVisibility = (dispatch: any)=>{
    dispatch({
        type: 'TOGLE_VISIBILITY',
        payload: {
            
        }
    })
}



export const createComponent = (dispatch: any, component: {})=>{
    dispatch({
        type: 'CREATE_COMPONENT',
        payload: {
            component
        }
    })
}

export const setChildren = (dispatch: any, children: HTMLElement[] | null)=>{
    dispatch({
        type: 'SET_ELEMENT_CHILDREN',
        payload: {
            children
        }
    })
}
export const changeToComponent = (dispatch: any, id: number, name: string)=>{
    dispatch({
        type: 'CHANGE_TO_COMPONENT',
        payload: {
            id, name
        }
    })
}

export const addStyle = (dispatch: any, className: string, style: string)=>{
    dispatch({
        type: 'ADD_STYLE',
        payload: {
            className, style
        }
    })

}