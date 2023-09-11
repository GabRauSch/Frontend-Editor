type Props ={
    clickEvent: (e: React.MouseEvent, element: string)=>void,
    dragEvent: (e: React.DragEvent, element: string, classList?: string[],  innerHTML?: string)=>void,
    name: string,
    element: string,
}
export const ElementDraggable = ({clickEvent, dragEvent, name, element}: Props) =>{
    return(
        <div className="element-draggable" draggable='true'
            onClick={(e)=>{clickEvent(e, element)}}
            onDragStart={(e)=>{dragEvent(e, element)}}>
            <div>
                <img src={`/media/${element}.svg`} alt="" style={{width: '10px'}} />
            </div>    
            {name}
        </div>
    )
}