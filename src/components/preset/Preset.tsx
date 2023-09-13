import { Editor } from "../../classes/Editor"
import {useState, useContext, useRef, useEffect} from 'react';
import { PresetOption } from './PresetOption/PresetOption'
import { PresetTool } from "./PresetTool/PresetTool";
import { Context } from "../../contexts/Context";
import { ElementDraggable } from "./ElementDraggable/ElementDraggable";
import { PresetSearchBar } from "./PresetSearchBar/PresetSearchBar";
import { appendElement,  changeSelectedElement,  closeOptions, closePreset, openOptions, removeSelectedElement, setElementId } from "../../utils/editor";
import { setCursor, setElement, setElementClassList, setElementTag, setInnerHTML, switchVisibility } from "../../utils/reduc";
import { ElementContent } from "./ElementContent/ElementContent";
import { LayoutContent } from "./LayoutContent/LayoutContent";
import { ComponentContent } from "./ComponentContent/ComponentContent";

export const Preset = ()=>{
    const { state, dispatch } = useContext(Context);
    const [presetDisplay, setPresetDisplay ] = useState('componentContent')

    const [tool, setTool] = useState('cursor');
    const [toolIndex, setToolIndex] = useState(1);
    const tools = ['cursor', 'mouse-arrow', 'expand', 'replace'];

    const changeCursorTool = ()=>{
        (toolIndex == tools.length -1) ? setToolIndex(0) : setToolIndex(toolIndex + 1)
        setTool(tools[toolIndex]);
        setCursor(dispatch, tools[toolIndex]);
    }
    
    const visions = ['hide', 'view'];
    const [vision, setVision] = useState('hide');
    const [visionIndex, setVisionIndex] = useState(1);

    const stateRef = useRef(state);
        useEffect(()=>{
            stateRef.current = state
        }, [state])

    const changeVision = ()=>{
        (visionIndex == visions.length -1) ? setVisionIndex(0) : setVisionIndex(visionIndex +1);
        setVision(visions[visionIndex]);

        const visibility = vision === 'view';

        switchVisibility(dispatch, visibility)
        
        const allDivs = document.querySelectorAll(`.user-element`);
        allDivs.forEach((el)=>{
            vision === 'view' ? el.classList.remove('dashed') : el.classList.add('dashed')
        })
    }

    const handleClick = (e: React.MouseEvent, element: string, classList: string[])=>{
        e.preventDefault();
        const elementObject = document.createElement(element) as HTMLElement; 
        const id = setElementId();
        if(!elementObject.id){
            elementObject.setAttribute('id', id.toString());
        }        
        
        appendElement(e, elementObject, classList);
        elementObject.addEventListener('click', (e)=>{
            
        closeOptions(e)
        removeSelectedElement()
        
        switch(stateRef.current.cursor.type){
            case 'cursor': // editor.openCode  
            break;
            case 'mouse-arrow':
                if(elementObject.classList.contains('selected-div'))
                elementObject.classList.remove('selected-div');
            else 
            elementObject.classList.add('selected-div')
        break;
        case 'expand':
            break;
            case 'replace':
                break;
            }
            setElement(dispatch, elementObject.id)
        })
        
        elementObject.addEventListener('contextmenu', (event)=>{
            event.preventDefault();
            const element = event.target as HTMLElement
            
            setElement(dispatch, element.id)
            openOptions(event);
            changeSelectedElement(element)
        })
    }

    const changeArea = (e: React.MouseEvent, area: string, id: string)=>{
        const active = document.querySelector('.active');
        active?.classList.remove('active');

        console.log(active)
        
        const areaElement = document.getElementById(id);
        areaElement?.classList.add('active');

        console.log('area element', areaElement)

        setPresetDisplay(area)
    }
    
    const handleDragStart = (e: React.DragEvent, element: string, classList?: string[],  innerHTML?: string)=>{
        setElementTag(dispatch, element);
        if(classList){
            setElementClassList(dispatch, classList)
        }
        if(innerHTML){
            setInnerHTML(dispatch, innerHTML)
        }
    }

    return (
        <aside id="presets">
            <div className="preset-panel">
                <PresetOption name="Components" image="plugin" action={(e)=>{changeArea(e, 'componentContent', 'components')}} active={presetDisplay === 'componentContent' } />
                <PresetOption name="Layout" image="layout" action={(e)=>{changeArea(e, 'layoutContent', 'layout')}} active={presetDisplay === 'layoutContent' }/>
                <PresetOption name="Elements" image="block" action={(e)=>{changeArea(e, 'elementContent', 'elements')}} active={presetDisplay === 'elementContent' }/>
                <PresetOption name="Templates" image="web-design" action={(e)=>{changeArea(e, 'templatesContent', 'templates')}} active={presetDisplay === 'templatesContent' }/>
                <PresetOption name="Action" image="gears" action={(e)=>{changeArea(e, 'actionContent', 'action')}} active={presetDisplay === 'actionContent' }/>
                <PresetOption name="Data" image="database" action={(e)=>{changeArea(e, 'dataContent', 'data')}} active={presetDisplay === 'dataContent' }/>
                <hr />
                <PresetTool name="cursor-tool" image={tool} action={()=>{changeCursorTool()}} />
                <PresetTool name="vision-tool" image={vision} action={changeVision} />
                
                <div className="filler"></div>
            </div>
            <div className="preset-content">
                <ComponentContent display={presetDisplay === 'componentContent'? 'block': 'none'} 
                    handleClick={handleClick} 
                    handleDragStart={handleDragStart}/>
                <ElementContent display={presetDisplay === 'elementContent'? 'block': 'none'} 
                    handleClick={handleClick} 
                    handleDragStart={handleDragStart} />
                <LayoutContent display={presetDisplay === 'layoutContent'? 'block': 'none'} 
                    handleClick={handleClick} 
                    handleDragStart={handleDragStart} /> 
                {/* <TemplateContent /> */}
                {/* <ActionContent /> */}
                {/* <DataContent /> */}

                <div className="close-preset" onClick={closePreset}>close</div>
            </div>
      </aside>
    )
}

    
