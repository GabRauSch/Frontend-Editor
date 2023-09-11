

export const CodeArea = ()=>{
    const closeCodeArea = ()=>{
        const code = document.getElementById('code') as HTMLElement
        code.style.display = 'none'
    }
    return (
        <aside id="code" >
            <div className="code-section">
                <div className="pull"></div>
                <pre>
                    <code id="code-area" className="language-html" contentEditable="true">
                    </code>
                </pre>
            </div>
            <div className="close-code" onClick={closeCodeArea}>close</div>
        </aside>

    )
}