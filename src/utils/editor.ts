import {v4 as uuid4} from 'uuid';

export const closePreset = ()=>{
    const preset = document.getElementById('presets') as HTMLElement
    preset.style.display = 'none'
}

export const appendElement = (e: React.MouseEvent, elementObject: HTMLElement, classList?: string[], area?: HTMLElement, innerHTML?: string, children?: HTMLElement[]) =>{
    if(!area){
        area = document.getElementById('page-view-body') as HTMLElement
    }
    if(classList){
        classList.forEach((el)=>{
            elementObject.classList.add(el);
        })
    }
    if(area.classList.contains('dashed')){
        elementObject.classList.add('dashed')
    }
    elementObject.classList.add('user-element');
    if(innerHTML){
        elementObject.innerHTML = innerHTML;
    }
    if(children){
        children.forEach((child)=>{
            elementObject.appendChild(child)
        })
    }

    area.appendChild(elementObject)    
}
export const createElementHash = ()=>{
    const hash = uuid4();
    return hash.slice(0,8)
}

export const openOptions = (e: any)=>{
    if(e.button === 2){
        const pageArea= document.getElementById('page-view-body') as HTMLElement;
        const optionsPanel = document.querySelector('.options-panel') as HTMLElement
        const clientXPosition = e.clientX - pageArea.getBoundingClientRect().left;
        optionsPanel.style.display = 'flex';
        optionsPanel.style.left = clientXPosition + 20 + 'px';
        optionsPanel.style.top = e.clientY + 'px';
    }
}

export const closeOptions= (e: any)=>{  
    const optionsPanel = document.querySelector('.options-panel') as HTMLElement
    optionsPanel.style.display = 'none';
}

export const changeSelectedElement = (element: HTMLElement)=>{
    const selected = document.querySelectorAll('.selected-div');

    selected.forEach((el)=>{
        el.classList.remove('selected-div')
    })
    element.classList.add('selected-div')
}

export const removeSelectedElement = ()=>{
    const selected = document.querySelectorAll('.selected-div');
    selected.forEach((el)=>{
        el.classList.remove('selected-div')
    })
}