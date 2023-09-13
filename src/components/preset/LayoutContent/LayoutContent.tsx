import { ElementDraggable } from "../ElementDraggable/ElementDraggable"
import { PresetSearchBar } from "../PresetSearchBar/PresetSearchBar"

type Props = {
    display: string,
    handleClick: (e: React.MouseEvent, element: string, classList: string[], innerHTML?: string)=>void,
    handleDragStart: (e: React.DragEvent, element: string, classList: string[], innerHTML?: string)=>void
}

export const LayoutContent = ({display, handleClick, handleDragStart}: Props)=>{
    return (

    <div id="layout-content" className="preset-content-body" style={{display}}>
        <PresetSearchBar/>
        <div className="element-content-division">
            <div className="element-content-title">Areas:</div>
            <div className="element-content-list">
                    <ElementDraggable
                        clickEvent={(e)=>{handleClick(e, 'header', ['user-header-template', 'user-visible-element'])}} 
                        dragEvent={(e)=>{handleDragStart(e, 'header', ['user-header-template', 'user-visible-element'])}} 
                        name="Header" element="layouts/header"
                    />
                    <ElementDraggable
                        clickEvent={(e)=>{handleClick(e, 'main', ['user-main-template', 'user-visible-element'])}} 
                        dragEvent={(e)=>{handleDragStart(e, 'main', ['user-main-template', 'user-visible-element'])}} 
                        name="Main" element="layouts/main"
                    />
                    <ElementDraggable
                        clickEvent={(e)=>{handleClick(e, 'footer', ['user-footer-template', 'user-visible-element'])}} 
                        dragEvent={(e)=>{handleDragStart(e, 'footer', ['user-footer-template', 'user-visible-element'])}} 
                        name="Footer" element="layouts/footer"
                    />
                    <ElementDraggable
                        clickEvent={(e)=>{handleClick(e, 'aside', ['user-aside-template', 'user-visible-element'])}} 
                        dragEvent={(e)=>{handleDragStart(e, 'aside', ['user-aside-template', 'user-visible-element'])}} 
                        name="Aside" element="layouts/aside"
                    />
                    <hr />
                    
                    <ElementDraggable
                        clickEvent={(e)=>{handleClick(e, 'div', ['user-container-template', 'user-visible-element'])}} 
                        dragEvent={(e)=>{handleDragStart(e, 'div', ['user-container-template', 'user-visible-element'])}} 
                        name="Container" element="layouts/container"
                    />
            </div>
        </div>
    </div>
    )
}

{/* <
<nav>
<section>
<article>
 */}