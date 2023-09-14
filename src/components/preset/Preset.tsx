import {useState, useContext, useRef, useEffect} from 'react';
import { PresetOption } from './PresetOption'
import { PresetTool } from "./PresetTool";
import { Context } from "../../contexts/Context";
import { ElementDraggable } from "./ElementDraggable";
import { PresetSearchBar } from "./PresetSearchBar";
import { appendElement,  changeSelectedElement,  closeOptions, closePreset, createElementHash, openOptions, removeSelectedElement } from "../../utils/editor";
import { addStyle, setChildren, setCursor, setElementClassList, setElementHash, setElementTag, setInnerHTML, togleVisibility } from "../../utils/reduc";
import { ElementContent } from "./ElementContent";
import { LayoutContent } from "./LayoutContent";
import { ComponentContent } from "./ComponentContent";

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

        togleVisibility(dispatch)
        
        const allDivs = document.querySelectorAll(`.user-element`);
        allDivs.forEach((el)=>{
            vision === 'view' ? el.classList.remove('dashed') : el.classList.add('dashed')
        })

        addStyle(dispatch, 'user-header-template', 'background-color: red')

    }

    const changeArea = (e: React.MouseEvent, area: string, id: string)=>{
        const active = document.querySelector('.active');
        active?.classList.remove('active');

        
        const areaElement = document.getElementById(id);
        areaElement?.classList.add('active');


        setPresetDisplay(area)
    }
    
    const handleDragStart = (e: React.DragEvent, element: string, classList?: string[],  innerHTML?: string, children?: HTMLElement[])=>{
        setElementTag(dispatch, element);
        if(classList){
            setElementClassList(dispatch, classList)
        }
        if(innerHTML){
            setInnerHTML(dispatch, innerHTML)
        } else{
            setInnerHTML(dispatch, null)
        }
        if(children){
            setChildren(dispatch, children)
        } else{
            setChildren(dispatch, null)
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
                    handleDragStart={handleDragStart}/>
                <ElementContent display={presetDisplay === 'elementContent'? 'block': 'none'}  
                    handleDragStart={handleDragStart} />
                <LayoutContent display={presetDisplay === 'layoutContent'? 'block': 'none'} 
                    handleDragStart={handleDragStart} /> 
                {/* <TemplateContent /> */}
                {/* <ActionContent /> */}
                {/* <DataContent /> */}

                <div className="close-preset" onClick={closePreset}>close</div>
            </div>
      </aside>
    )
}

    
