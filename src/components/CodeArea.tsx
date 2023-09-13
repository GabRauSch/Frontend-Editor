

export const CodeArea = ()=>{
    const closeCodeArea = ()=>{
        const code = document.getElementById('code') as HTMLElement
        code.style.display = 'none'
    }
    return (
        <aside id="code" style={{display: 'none'}} >
            <div className="code-section" >
                <div className="pull"></div>
                <div className="code-editor">
                    <div id="code-language">HTML</div>
                    <div id="code-area" className="css" contentEditable="true">
                    </div>
                </div>
            </div>
            <div className="close-code" onClick={closeCodeArea}>close</div>
        </aside>

    )
}