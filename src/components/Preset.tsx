import { useElementContext } from "../Redux/ElementContext";
import { Editor } from "../classes/Editor"
import {useState} from 'react';

export const Preset = ()=>{
    const editor = new Editor();
    const { setElementObject } = useElementContext();


    const handleDragStart = (e: React.DragEvent, element: string)=>{
        const elementObject = document.createElement(element) as HTMLElement; 
        setElementObject(elementObject);
    }


    return (
        <aside id="presets">
            <div className="preset-panel">
                <div id="components" className="preset-option">
                    <div className="preset-option-image-area">
                        <img src="/media/plugin.png" alt="" />
                    </div>
                    Components
                </div>
                <div id='design' className="preset-option active">
                    <div className="preset-option-image-area">
                        <img src="/media/layout.png" alt="" />
                    </div>
                    Layout
                </div>
                <div id="elements" className="preset-option">
                    <div className="preset-option-image-area">
                        <img src="/media/block.png" alt="" />
                    </div>
                    Elements
                </div>
                <div id="templates" className="preset-option">
                    <div className="preset-option-image-area">
                        <img src="/media/web-design.png" alt="" />
                    </div>
                    Templates
                </div>
                <div className="filler"></div>
            </div>
            <div className="preset-content">

            </div>
      </aside>
    )
}
    // <div className="add-buttonTEMP" 
    // draggable='true'
    //     onDragStart={(e)=>{handleDragStart(e, 'button')}}
    // >button</div>
