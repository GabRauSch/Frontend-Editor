import { useContext } from "react";
import { Context } from "../../contexts/Context";
import { changeToComponent, createComponent } from "../../utils/reduc";
import { componentType } from "../../reducers/componentsReducer";

export const OptionsPanel = ()=>{
    const {state, dispatch} = useContext(Context)
    const deleteComponent = (e: React.MouseEvent)=>{
        const hash = state.element.elementHash as string;
        const element = document.querySelector(`[hash="${hash}"]`);
        if(element){
          element.remove()
        }
      }

    const openCodePanel = (language: string)=>{
        const codePanel=document.getElementById('code') as HTMLElement;
        codePanel.style.display = 'flex';

        const title = document.getElementById('code-language') as HTMLElement 
        title.innerHTML = language;

        const codeArea = document.getElementById('code-area') as HTMLElement;
        codeArea.classList.remove('html');
        codeArea.classList.remove('javascript');
        codeArea.classList.add(language);

        codeArea.innerHTML='';

        const hash = state.element.elementHash as string;
        const element = state.component.components.find(el=>el.hash == hash);

        const elementClassList = state.cssClasses.cssClasses.filter(el=>element?.classList.includes(el.name)) as any[];

    }

    const defineAsComponent = ()=>{
        const elementHash = state.element.elementHash;
        const element = document.querySelector(`[hash="${elementHash}"]`)  as HTMLElement

        const component = state.component.components.find(el => el.hash == element.getAttribute('hash'));

        if(component) changeToComponent(dispatch, component.id as number, 'Name')

        // let elementsIdList: string[] = []
        // for(let i = 0; i< element.children.length; i++){
        //     elementsIdList.push(element.children[i].id)
        // }


        // const component = {
        //     name: 'jorginho',
        //     props: [{jubileu: 'string'}],
        //     elementsIdList,
        //     type: 'header'
        // }
        // createComponent(dispatch, component)
    }

    const closeOptionsPanel = ()=>{
        const optionsPanel = document.querySelector('.options-panel') as HTMLElement
        optionsPanel.style.display = 'none';
        document.querySelector('.selected-div')?.classList.remove('selected-div');
    }
    return (        
        <div className="options-panel">
            <div className="panel-option" onClick={()=>{openCodePanel('css'); closeOptionsPanel()}}>Estilizar</div>
            <div className="panel-option">Abrir vizualização</div>
            <div className="panel-option" onClick={()=>{defineAsComponent(); closeOptionsPanel()}}>Definir como componente</div>
            <div className="panel-option" onClick={(e)=>{deleteComponent(e);closeOptionsPanel()}}>Deletar</div>
        </div>
    )
}