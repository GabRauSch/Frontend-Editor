import { ElementDraggable } from "../ElementDraggable/ElementDraggable"
import { PresetSearchBar } from "../PresetSearchBar/PresetSearchBar"

type Props = {

    display: string,
    handleClick: (e: React.MouseEvent, element: string, classList: string[], innerHTML?: string)=>void
    handleDragStart: (e: React.DragEvent, element: string, classList: string[], innerHTML?: string)=>void
}

export const ElementContent = ({display, handleClick, handleDragStart}: Props)=>{
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
                <ElementDraggable
                        clickEvent={(e)=>{handleClick(e, 'div', ['user-div-template'])}} 
                        dragEvent={(e)=>{handleDragStart(e, 'div', ['user-div-template'])}} 
                        name="Div" element="div"
                    />
                <div className="element-content-title" onClick={()=>{
                    close('functionalities') 
                    flip('functionalities')
                    }}>
                    <div>Funcionais:</div>
                    <div className="element-content-open-close">
                        <img id="functionalities-image" src="/media/icons/right-arrow.png" style={{transform: 'rotate(90deg)'}} alt="dl" />
                    </div>
                </div>
                <div id="functionalities" className="element-content-list">
                    <div className="element-content-item">
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'form', ['user-form-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'form', ['user-form-template'])}} 
                            name="Form" element="utilities/exam"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'input', ['user-input-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'input', ['user-input-template'])}} 
                            name="Input" element="utilities/text"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'button', ['user-button-template'], 'submit')}} 
                            dragEvent={(e)=>{handleDragStart(e, 'button', ['user-button-template'], 'submit')}} 
                            name="Button" element="utilities/button"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'textarea', ['user-textarea-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'textarea', ['user-textarea-template'])}} 
                            name="Textarea" element="utilities/text-box"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'select', ['user-select-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'select', ['user-select-template'])}} 
                            name="Select" element="utilities/menu-burger"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'label', ['user-label-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'label', ['user-label-template'])}} 
                            name="Label" element="utilities/label"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'fieldset', ['user-fieldset-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'fieldset', ['user-fieldset-template'])}} 
                            name="Fieldset" element="utilities/form"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'legend', ['user-legend-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'legend', ['user-legend-template'])}} 
                            name="Legend" element="utilities/subtitles"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'optgroup', ['user-optgroup-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'optgroup', ['user-optgroup-template'])}} 
                            name="Optgroup" element="utilities/list-items"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'option', ['user-option-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'option', ['user-option-template'])}} 
                            name="Option" element="utilities/option"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'datalist', ['user-datalist-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'datalist', ['user-datalist-template'])}} 
                            name="Datalist" element="utilities/list-items"
                        />
                        <ElementDraggable
                            clickEvent={(e)=>{handleClick(e, 'progress', ['user-progress-template'])}} 
                            dragEvent={(e)=>{handleDragStart(e, 'progress', ['user-progress-template'])}} 
                            name="Progress" element="utilities/load"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <form>
<input>
<button>
<textarea>
<select>
<label>
<fieldset>
<legend>
<optgroup>
<option>
<datalist>
<progress>
<meter></meter> */}