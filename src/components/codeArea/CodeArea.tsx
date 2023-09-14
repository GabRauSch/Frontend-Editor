import { useContext, useEffect, useState} from "react"
import { Context } from "../../contexts/Context"
import { cssClasses, cssClassesType } from "../../reducers/cssClassesReducer";


export const CodeArea = ()=>{
    const {state, dispatch} = useContext(Context);
    const [language, setLanguage] = useState('css');
    const [classList, setClassList ] = useState<cssClasses[]>();

    useEffect(()=>{
        const hash = state.element.elementHash as string;
        const element = state.component.components.find(el=>el.hash == hash);
        const elementClassList = state.cssClasses.cssClasses.filter(el=>element?.classList.includes(el.name));
        setClassList(elementClassList)
    }, [state.element])

    const handleWrite = (e: React.KeyboardEvent)=>{
        console.log(e);
        console.log(state.element)
    }

    const closeCodeArea = ()=>{
        const code = document.getElementById('code') as HTMLElement
        code.style.display = 'none'
    }


    return (
        <aside id="code" style={{display: 'flex'}} >
            <div className="code-section" >
                <div className="pull"></div>
                <div className="code-editor">
                    <div id="code-language">{language}</div>
                    <div id="code-area" className="css" >
                        {classList?.map((el)=>(
                            <div id="css-code-class-style" >
                                <div id="code-class-name">
                                    <div className="code-class-name code-editable">
                                        {`.${el.name}`}   
                                    </div>
                                    <span className="code-text">{'{'}</span>
                                </div>
                                    {el.styles.map((style)=>(
                                        <div id="code-class-content">
                                            <div id="code-content-attribute">
                                                <div id="suprassumo">
                                                    <div className="code-content-attribute code-editable">
                                                        {style.split(`:`)[0]} 
                                                    </div>
                                                </div>
                                                <span className="code-text">:</span>
                                            </div>
                                            <div>
                                                <div className="code-content-value code-editable">
                                                    {style.split(`:`)[1]} 
                                                </div>
                                                <span className="code-text">;</span>
                                            </div>
                                        </div>
                                    ))}
                                <span className="code-text">{'}'}</span>
                            </div>
                        ))

                        }

                    </div>
                </div>
            </div>
            <div className="close-code" onClick={closeCodeArea}>close</div>
        </aside>

    )
}