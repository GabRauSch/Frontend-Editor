import { ElementDraggable } from "./ElementDraggable"
import { PresetSearchBar } from "./PresetSearchBar"

type Props = {
    display: string,
    handleDragStart: (e: React.DragEvent, element: string, classList: string[], innerHTML?: string)=>void
}

export const LayoutContent = ({display, handleDragStart}: Props)=>{
    return (

    <div id="layout-content" className="preset-content-body" style={{display}}>
        <PresetSearchBar/>
        <div className="element-content-division">
            <div className="element-content-title">Areas:</div>
            <div className="element-content-list">
                    <ElementDraggable
                        dragEvent={(e)=>{handleDragStart(e, 'header', ['user-header-template', 'user-visible-element'])}} 
                        name="Header" element="layouts/header"
                    />
                    <ElementDraggable
                        dragEvent={(e)=>{handleDragStart(e, 'main', ['user-main-template', 'user-visible-element'])}} 
                        name="Main" element="layouts/main"
                    />
                    <ElementDraggable
                        dragEvent={(e)=>{handleDragStart(e, 'footer', ['user-footer-template', 'user-visible-element'])}} 
                        name="Footer" element="layouts/footer"
                    />
                    <ElementDraggable
                        dragEvent={(e)=>{handleDragStart(e, 'aside', ['user-aside-template', 'user-visible-element'])}} 
                        name="Aside" element="layouts/aside"
                    />
                    <hr />
                    
                    <ElementDraggable
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