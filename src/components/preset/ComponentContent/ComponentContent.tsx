import { useContext } from "react"
import { ElementDraggable } from "../ElementDraggable/ElementDraggable"
import { PresetSearchBar } from "../PresetSearchBar/PresetSearchBar"
import { Context } from "../../../contexts/Context"

type Props = {
    display: string,
    handleClick: (e: React.MouseEvent, element: string, classList: string[], innerHTML?: string)=>void
    handleDragStart: (e: React.DragEvent, element: string, classList: string[], innerHTML?: string)=>void
}

export const ComponentContent = ({display, handleClick, handleDragStart}: Props)=>{
    const {state, dispatch } = useContext(Context);
    
    const close = (area: string)=>{
        const content = document.getElementById(area) as HTMLElement; 
        content.style.display = content.style.display === 'none' ? 'flex' : 'none' 
    }
    const flip = (area: string)=>{
        const image = document.getElementById(area + '-image') as HTMLElement;
        image.style.transform = image.style.transform === 'rotate(90deg)' ? 'rotate(-90deg)': 'rotate(90deg)'
    }



    return (
        <div style={{display}} id="elements-content" className="preset-content-body">
            <PresetSearchBar />
            <div className="element-content-division">
                <div className="element-content-title" onClick={()=>{
                    close('headers') 
                    flip('headers')
                    }}>
                    <div>Headers:</div>
                    <div className="element-content-open-close">
                        <img id="headers-image" src="/media/icons/right-arrow.png" style={{transform: 'rotate(90deg)'}} alt="dl" />
                    </div>
                </div>
                <div id="headers" className="element-content-list">
                    <div className="element-content-item">
                        {state.component.components.map((component)=>(
                            <ElementDraggable
                                clickEvent={(e)=>{handleClick(e, 'form', ['user-form-template'])}} 
                                dragEvent={(e)=>{handleDragStart(e, 'form', ['user-form-template'])}} 
                                name={component.name} element="utilities/exam"
                            />
                        ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
