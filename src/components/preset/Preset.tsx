import { Editor } from "../../classes/Editor"
import {useState, useContext} from 'react';
import { PresetOption } from './PresetOption/PresetOption'
import { PresetTool } from "./PresetTool/PresetTool";
import { Context } from "../../contexts/Context";
import { ElementDraggable } from "./ElementDraggable/ElementDraggable";
import { PresetSearchBar } from "./PresetSearchBar/PresetSearchBar";

export const Preset = ()=>{
    const { state, dispatch } = useContext(Context);

    const [tool, setTool] = useState('cursor');
    const [toolIndex, setToolIndex] = useState(1)

    const tools = ['cursor', 'mouse-arrow', 'expand', 'replace']
    const changeTool = ()=>{
        (toolIndex == tools.length -1) ? setToolIndex(0) : setToolIndex(toolIndex + 1)
        setTool(tools[toolIndex])
    }

    const closePreset = ()=>{
        const preset = document.getElementById('presets') as HTMLElement
        preset.style.display = 'none'
    }
    const changeArea = (e: React.MouseEvent)=>{
        const active = document.querySelector('.active');
        active?.classList.remove('active')
        
        const target = e.target as HTMLDivElement;
        target.classList.add('active');
    }

    const handleDragStart = (e: React.DragEvent, element: string, classList?: string[],  innerHTML?: string)=>{
        const elementObject = document.createElement(element) as HTMLElement;
        
        if(innerHTML){
            elementObject.innerHTML = innerHTML as string
        }
        if(classList){
            classList.forEach((el)=>{
                elementObject.classList.add(el)
            })
        }
        dispatch({
            type: "SET_ELEMENT",
            payload: {
                element: elementObject
            }
        })
    }

    const appendElement = (e: React.MouseEvent, element: string, classList?: string[], innerHTML?: string) =>{
        const editor = new Editor();

        const elementObject = document.createElement(element) as HTMLElement; 
        editor.addElement(elementObject, classList);
    }

    return (
        <aside id="presets">
            <div className="preset-panel">
                <PresetOption name="Components" image="plugin" action={changeArea} />
                <PresetOption name="Layout" image="layout" action={changeArea} active={true}/>
                <PresetOption name="Elements" image="block" action={changeArea} />
                <PresetOption name="Templates" image="layout" action={changeArea} />
                
                <hr />
                <PresetTool name="cursor-tool" image={tool} action={changeTool} />
                
                <div className="filler"></div>
            </div>
            <div className="preset-content">
                <div style={{display: 'none'}} id="elements-content" className="preset-content-body">
                   <PresetSearchBar />
                    <div className="element-content-division">
                        <div className="element-content-title">Funcionais:</div>
                        <div className="element-content-list">
                            <div className="element-content-item">
                                <div className="element-draggable" draggable='true'
                                onDragStart={(e)=>{handleDragStart(e, 'button',[],  'Submit')}}>
                                button</div>

                                <div className="element-draggable" draggable='true'
                                onDragStart={(e)=>{handleDragStart(e, 'input',[], 'Enviar')}}>
                                input</div>

                                <div className="element-draggable" draggable='true'
                                onDragStart={(e)=>{handleDragStart(e, 'textarea', [], '')}}>
                                textarea</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="layout-content" className="preset-content-body">
                    <PresetSearchBar/>
                    <div className="element-content-division">
                        <div className="element-content-title">Areas:</div>
                        <div className="element-content-list">
                                <ElementDraggable
                                    clickEvent={(e)=>{appendElement(e, 'header', ['user-header-template'])}} 
                                    dragEvent={(e)=>{handleDragStart(e, 'header', ['user-header-template', 'teste'])}} 
                                    name="Header" element="header"
                                />
                                <ElementDraggable
                                    clickEvent={(e)=>{appendElement(e, 'main', ['user-main-template'])}} 
                                    dragEvent={(e)=>{handleDragStart(e, 'main', ['user-main-template'])}} 
                                    name="Main" element="main"
                                />
                                <ElementDraggable
                                    clickEvent={(e)=>{appendElement(e, 'footer', ['user-footer-template'])}} 
                                    dragEvent={(e)=>{handleDragStart(e, 'footer', ['user-footer-template'])}} 
                                    name="Footer" element="footer"
                                />
                                <ElementDraggable
                                    clickEvent={(e)=>{appendElement(e, 'aside', ['user-aside-template'])}} 
                                    dragEvent={(e)=>{handleDragStart(e, 'aside', ['user-aside-template'])}} 
                                    name="Aside" element="aside"
                                />
                                <hr />
                                
                                <ElementDraggable
                                    clickEvent={(e)=>{appendElement(e, 'div', ['user-container-template'])}} 
                                    dragEvent={(e)=>{handleDragStart(e, 'div', ['user-container-template'])}} 
                                    name="Container" element="container"
                                />
                        </div>
                    </div>
                </div>
                <div className="close-preset" onClick={closePreset}>close</div>
            </div>
      </aside>
    )
}

    
