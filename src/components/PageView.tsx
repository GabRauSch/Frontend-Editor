import { useState } from "react";
import { useElementContext } from "../Redux/ElementContext";
import {v4 as uuid4} from 'uuid'


export const PageView = ()=>{
  const [elementStyles, setElementStyles] = useState<{ [key: string]: string }>({});
  const { elementObject } = useElementContext();

  const handleDragOver = (e: React.DragEvent)=>{
    e.preventDefault();
    const target = e.target as HTMLElement;

    const elementId = target.getAttribute('id') as string;
    if (!elementStyles[elementId]) {
      elementStyles[elementId] = target.getAttribute('style') || '';
      setElementStyles({ ...elementStyles });
    }

    target.style.backgroundColor = 'red';
  }

  const handleDragLeave = (e: React.DragEvent)=>{
    e.preventDefault();
    const target = e.target as HTMLElement;
    console.log(target)
    
    const elementId = target.getAttribute('id') as string;

    if (elementStyles[elementId]) {
      target.setAttribute('style', elementStyles[elementId]);
      delete elementStyles[elementId]; 
      setElementStyles({ ...elementStyles });
    }
  }

  const handleDrop = (e: React.DragEvent)=>{
    e.preventDefault();
    const target = e.target as HTMLElement;
    const elementId = target.getAttribute('id') as string;
    if (elementObject instanceof HTMLElement) {
      const elementObjectId = uuid4(); 
      elementObject.setAttribute('id', elementObjectId.toString());
      elementObject.setAttribute('style', 'background-color: #fff');

      elementStyles[elementObjectId] = elementObject.getAttribute('style') || '';

      target.appendChild(elementObject);
        
      console.log(elementStyles)
    }
    if (elementStyles[elementId]) {
      target.setAttribute('style', elementStyles[elementId]);
      delete elementStyles[elementId];
      setElementStyles({ ...elementStyles });
    }
  }

    return (
        <main id="page-view">
          <div id="page-view-body" style={{backgroundColor: '#fff'}} 
            onDragLeave={(e)=>{handleDragLeave(e)}} 
            onDragOver={(e)=>{handleDragOver(e)}}
            onDrop={(e)=>{handleDrop(e)}}>
            
          </div>
      </main>
    )
}