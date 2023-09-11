import {v4 as uuid4} from 'uuid'

export class Editor {
    pageArea!: HTMLElement;
    optionsPanel!: HTMLElement;

    constructor(){
        window.addEventListener('load', () => {
            this.pageArea = document.getElementById('page-view-body') as HTMLElement;
        });
        this.pageArea = document.getElementById('page-view-body') as HTMLElement;
        this.optionsPanel = document.querySelector('.options-panel') as HTMLElement;
    }

    addElement(element: HTMLElement, classList?: string[], area?: HTMLElement){
        if(!area){
            area = this.pageArea
        }
        if(classList){
            classList.forEach((el)=>{
                element.classList.add(el);
            })
        }
        element.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            console.log(e.target)
            if(e.button === 2){
                this.openDialogue(e)
            }
        })
        const elementObjectId = uuid4(); 
        element.setAttribute('id', elementObjectId.toString());

        area.appendChild(element)
    }

    openDialogue(e: MouseEvent){
        const clientXPosition = e.clientX - this.pageArea.getBoundingClientRect().left;
        this.optionsPanel.style.display = 'flex';
        this.optionsPanel.style.left = clientXPosition + 20 + 'px';
        this.optionsPanel.style.top = e.clientY + 'px';

    }

}