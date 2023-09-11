
type Props = {
    name: string,
    image: string,
    action: (e: React.MouseEvent)=>void,
    active?: boolean
}
export const PresetOption = ({name, image, action, active}: Props)=>{
    return (
        <div id={name.toLowerCase()} className={`preset-option ${active? 'active': ''}`}
        onClick={(e)=>{action(e)}}>
            <div className="preset-option-image-area">
                <img src={`/media/${image}.png`} alt="" />
            </div>
            {name}
        </div>
    )
} 