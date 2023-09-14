type Props ={
    dragEvent: (e: React.DragEvent, element: string, classList: string[],  innerHTML?: string)=>void,
    name: string,
    element: string,
    clickEvent?: (e: React.MouseEvent, element: string, classList: string[],  innerHTML?: string)=>void,
}
export const ElementDraggable = ({clickEvent, dragEvent, name, element}: Props) =>{
    return(
        <div className="element-draggable" draggable='true'
            onClick={(e) => (clickEvent ? clickEvent(e, element, [], '') : null)}
            onDragStart={(e)=>{dragEvent(e, element, [], '')}}>
            <div>
                <img src={`/media/elements/${element}.svg`} alt="" style={{width: '13px'}} />
            </div>    
            {name}
        </div>
    )
}