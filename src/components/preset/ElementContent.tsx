import { ElementDraggable } from "./ElementDraggable"
import { PresetSearchBar } from "./PresetSearchBar"

type Props = {

    display: string,
    handleDragStart: (e: React.DragEvent, element: string, classList: string[], innerHTML: string)=>void
}

export const ElementContent = ({display, handleDragStart}: Props)=>{
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
                        dragEvent={(e)=>{handleDragStart(e, 'div', ['user-div-template'], '')}} 
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
                            dragEvent={(e)=>{handleDragStart(e, 'form', ['user-form-template'], '')}} 
                            name="Form" element="utilities/exam"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'input', ['user-input-template'], '')}} 
                            name="Input" element="utilities/text"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'button', ['user-button-template'], 'submit')}} 
                            name="Button" element="utilities/button"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'textarea', ['user-textarea-template'], '')}} 
                            name="Textarea" element="utilities/text-box"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'select', ['user-select-template'], '')}} 
                            name="Select" element="utilities/menu-burger"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'label', ['user-label-template'], '')}} 
                            name="Label" element="utilities/label"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'fieldset', ['user-fieldset-template'], '')}} 
                            name="Fieldset" element="utilities/form"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'legend', ['user-legend-template'], '')}} 
                            name="Legend" element="utilities/subtitles"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'optgroup', ['user-optgroup-template'], '')}} 
                            name="Optgroup" element="utilities/list-items"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'option', ['user-option-template'], '')}} 
                            name="Option" element="utilities/option"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'datalist', ['user-datalist-template'], '')}} 
                            name="Datalist" element="utilities/list-items"
                        />
                        <ElementDraggable
                            dragEvent={(e)=>{handleDragStart(e, 'progress', ['user-progress-template'], '')}} 
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