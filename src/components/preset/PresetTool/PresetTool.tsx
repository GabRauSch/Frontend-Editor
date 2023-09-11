type Props = {
    name: string,
    image: string,
    action: ()=>void
}

export const PresetTool = ({name, image, action}: Props)=>{
    return (
        <div id={name} className="preset-option" onClick={()=>{action()}}>
            <div className="preset-tool-image-area">
                <img src={`/media/${image}.png`} alt="" />
            </div>
        </div>
    )
}