import {useContext, useState } from "react";
import {v4 as uuid4} from 'uuid';
import { Context } from "../contexts/Context";
import { Editor } from "../classes/Editor";
import '../styles/userStyle.css'

export const PageView = ()=>{
  const {state, dispatch } = useContext(Context)

  const appendElement = (target?: HTMLElement ) =>{
    const editor = new Editor();
    const element = state.element.element as HTMLElement;
    const classList = state.element.classList as string[]

    editor.addElement(element, classList, target);
}

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
    appendElement(target);
    target.classList.remove('user-dragging-over')
  }

    return (
        <main id="page-view">
          <div className="options-panel">
            <div className="panel-option">Estilizar</div>
            <div className="panel-option">Abrir vizualização</div>
            <div className="panel-option">Definir como componente</div>
          </div>
          <div id="page-view-body" style={{backgroundColor: '#fff'}} 
            onDragLeave={(e)=>{handleDragLeave(e)}} 
            onDragOver={(e)=>{handleDragOver(e)}}
            onDrop={(e)=>{handleDrop(e)}}
            >
          
          </div>
      </main>
    )
}