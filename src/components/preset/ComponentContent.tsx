import { useContext, useEffect } from "react"
import { ElementDraggable } from "./ElementDraggable"
import { PresetSearchBar } from "./PresetSearchBar"
import { Context } from "../../contexts/Context"

type Props = {
    display: string,
    handleDragStart: (e: React.DragEvent, element: string, classList: string[], innerHTML?: string, children?: HTMLElement[])=>void
}

export const ComponentContent = ({display, handleDragStart}: Props)=>{
    const {state, dispatch } = useContext(Context);

    const close = (area: string)=>{
        const content = document.getElementById(area) as HTMLElement; 
        content.style.display = content.style.display === 'none' ? 'flex' : 'none' 
    }
    const flip = (area: string)=>{
        const image = document.getElementById(area + '-image') as HTMLElement;
        image.style.transform = image.style.transform === 'rotate(90deg)' ? 'rotate(-90deg)': 'rotate(90deg)'
    }

   
    let iteration = 0;
    const findChildren = (hash: string) => {
        iteration++;
        let componentHTML: HTMLElement[] = [];
        const children = state.component.components.filter(el => el.parentHash == hash);
        
      
        children.forEach((el) => {
          const element = document.createElement(el.tag) as HTMLElement;
          if(el.innerHTML) element.innerHTML = el.innerHTML;  
          if(el.classList){
            el.classList.forEach((className)=>{
                element.classList.add(className);
                if(state.visible.visible){
                    element.classList.add('dashed')
                }
            })
          }

          const gChild = findChildrenIteration(el.hash);
          if (gChild !== null) {
            element.appendChild(gChild);
          }
          componentHTML.push(element);
        });
      
        return componentHTML;
      };
      
      const findChildrenIteration = (hash: string) => {
        const children = state.component.components.filter((el) => {
          return el.parentHash == hash;
        });
      
        const childElements = children.map((el) => {
          const child = document.createElement(el.tag) as HTMLElement;
          if (el.innerHTML) child.innerHTML = el.innerHTML;
          if(el.classList){
            el.classList.forEach((className)=>{
                child.classList.add(className)
                if(state.visible.visible){
                    child.classList.add('dashed')
                }
            })
          }
      
          const gChild = findChildrenIteration(el.hash);
          if (gChild !== null) {
            child.appendChild(gChild);
          }
          return child;
        });
      
        iteration++;
      
        return childElements.length > 0 ? childElements[0] : null;
      };
      
      

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
                        {state.component.components.map((component, key)=>{
                            if(component.isComponent === 0){
                                return
                            }    
                            const children = findChildren(component.hash);
                            return (
                                <ElementDraggable key={key}
                                    dragEvent={(e)=>{
                                        handleDragStart(e, component.tag, component.classList,
                                        component.innerHTML, children)}} 
                                    name={component.name} element={``}
                                />
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
