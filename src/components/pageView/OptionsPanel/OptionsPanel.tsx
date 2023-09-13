import { useContext } from "react";
import { Context } from "../../../contexts/Context";
import { createComponent } from "../../../utils/reduc";

export const OptionsPanel = ()=>{
    const {state, dispatch} = useContext(Context)
    const deleteComponent = (e: React.MouseEvent)=>{
        const element = document.getElementById(state.element.elementId as string);
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

        const element = document.getElementById(state.element.elementId as string) as HTMLElement
        const elementClassList = Array.from(element.classList); 
        const computedStyles = state.cssClasses.cssClasses;
        const elementClassObject = computedStyles.filter(cssClass => elementClassList.includes(cssClass.name));
          

        elementClassObject.forEach((css)=>{
            const codeObject = document.createElement('div')
            const spanTag = document.createElement('span');
            spanTag.classList.add('css-tag-class')
            spanTag.innerHTML = `.${css.name}`;

            const openningBracket = '{';
            const jumpLine = '<br>';
            const closingBracket = '}';
            const colon = ':';
            const semiColon = ';';


            let attributes = document.createElement('div');
            css.styles.forEach((style)=>{
                const attributeArea = document.createElement('div');
                
                const attributeNameArea = document.createElement('span');
                const attributeName = style.split(':')[0];
                attributeNameArea.innerHTML = attributeName

                const attributeValueArea = document.createElement('span');
                const attributeValue =  style.split(':')[1]
                attributeValueArea.innerHTML =attributeValue

                attributeNameArea.classList.add('css-attribute');

                const containsNumber = /\d+/.test(attributeValue);
                if(containsNumber){
                    attributeValueArea.classList.add('css-value-number')
                } else{
                    attributeValueArea.classList.add('css-value-string')
                }

                attributes.appendChild(attributeNameArea);
                attributes.innerHTML += colon;
                attributes.appendChild(attributeValueArea);
                attributes.innerHTML += semiColon;
                attributes.innerHTML += jumpLine;
            })

            
            codeArea.appendChild(spanTag);
            codeArea.innerHTML += openningBracket;
            codeArea.innerHTML += jumpLine;
            codeArea.appendChild(attributes);
            codeArea.innerHTML += closingBracket;
            codeArea.innerHTML += jumpLine;
        })
    }

    const defineAsComponent = ()=>{
        const elementId = state.element.elementId;
        const element = document.getElementById(elementId as string) as HTMLElement


        console.log('oi')
        let elementsIdList: string[] = []
        for(let i = 0; i< element.children.length; i++){
            elementsIdList.push(element.children[i].id)
        }


        const component = {
            name: 'jorginho',
            props: [{jubileu: 'string'}],
            elementsIdList
        }
        createComponent(dispatch, component)
    }

    const closeOptionsPanel = ()=>{
        const optionsPanel = document.querySelector('.options-panel') as HTMLElement
        optionsPanel.style.display = 'none';
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