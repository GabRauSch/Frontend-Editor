export class Editor {
    pageArea!: HTMLElement;

    constructor(){
        this.pageArea = document.getElementById('page-view-body') as HTMLElement;
    }

    addElement(element: HTMLElement , area: HTMLElement = this.pageArea){
        console.log(element, area)
        area?.appendChild(element)
    }


}