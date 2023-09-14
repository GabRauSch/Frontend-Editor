import {useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../contexts/Context";
import '../../styles/userStyle.css'
import { appendElement, changeSelectedElement, closeOptions, createElementHash, openOptions, removeSelectedElement } from "../../utils/editor";
import { createComponent, setElementHash, setInnerHTML } from "../../utils/reduc";
import { OptionsPanel } from "./OptionsPanel";

export const PageView = ()=>{
  const {state, dispatch } = useContext(Context)

  const stateRef = useRef(state);
  useEffect(()=>{
      stateRef.current = state
  }, [state])

  const handleDragOver = (e: React.DragEvent)=>{
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.classList.add('user-dragging-over')
  }

  const handleDragLeave = (e: React.DragEvent)=>{
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.classList.remove('user-dragging-over')
  }

  const handleDrop = (e: React.DragEvent)=>{
    e.preventDefault();
    const target = e.target as HTMLElement;

    const element = document.createElement(state.element.elementTag as string)
    const classList = state.element.classList as string[];
    const innerHTML = state.element.innerHTML as string;
    const children = state.element.children as HTMLElement[];

    const hash = createElementHash();
    if(!element.getAttribute('hash')){
      element.setAttribute('hash', hash.toString());
    }
        
    appendElement(e, element, classList, target, innerHTML, children);
    
    target.classList.remove('user-dragging-over');
    const parentHash = target.getAttribute('hash')

    setInnerHTML(dispatch, '');
    const component = {
      id: state.component.components.length + 1,
      hash,
      parentHash,
      position: 0,
      tag: element.tagName,
      cloneSiblings: 0,
      innerHTML: innerHTML,
      isComponent: 0,
      name: '',
      props: null,
      classList
    }
    createComponent(dispatch, component);

    element.addEventListener('click', (e)=>{
      closeOptions(e)
      removeSelectedElement()
      
      switch(stateRef.current.cursor.type){
          case 'cursor': // editor.openCode  
              break;
          case 'mouse-arrow':
              const element = e.target as HTMLElement
              if(element.classList.contains('selected-div'))
                  element.classList.remove('selected-div');
              else 
                  element.classList.add('selected-div')
             break;
          case 'expand':
              break;
          case 'replace':
              break;
      }
      setElementHash(dispatch, element.getAttribute('hash') as string)          
    })

    element.addEventListener('contextmenu', (event)=>{
      event.preventDefault();
      const elementObject = event.target as HTMLElement
      changeSelectedElement(elementObject);      
      openOptions(event);
      setElementHash(dispatch, elementObject.getAttribute('hash') as string);
    })
  }
    return (
        <main id="page-view">
          <OptionsPanel />
          <div id="page-view-body" className="user-visible-element user-element" style={{backgroundColor: '#fff'}} 
            onDragLeave={(e)=>{handleDragLeave(e)}} 
            onDragOver={(e)=>{handleDragOver(e)}}
            onDrop={(e)=>{handleDrop(e)}}
            >
          
          </div>
      </main>
    )
}