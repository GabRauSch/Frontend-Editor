import { useContext, useEffect, useState } from "react"
import { CodeArea } from "../components/codeArea/CodeArea"
import { PageView } from "../components/pageView/PageView"
import { Preset } from "../components/preset/Preset"
import { Context } from "../contexts/Context"

export const Editor = ()=>{
    const {state, dispatch} = useContext(Context);
    const [stylesheet, setStyleSheet] = useState('');
    useEffect(() => {
    let styleSheetContent = '';
    state.cssClasses.cssClasses.forEach((el) => {
        const classStyles = el.styles.map((style) => `${style};`).join('');
        styleSheetContent += `.${el.name}{${classStyles}}`;
    });

    setStyleSheet(styleSheetContent);

    const userStyle = document.getElementById('user-style');
    if (userStyle) {
        userStyle.innerHTML = styleSheetContent;
    } else {
        const newUserStyle = document.createElement('style');
        newUserStyle.id = 'user-style';
        newUserStyle.innerHTML = styleSheetContent;
        document.head.appendChild(newUserStyle);
    }
    }, [state.cssClasses]);

    useEffect(() => {
        const userStyle = document.createElement('style');
        userStyle.id = 'user-style';
        userStyle.innerHTML = stylesheet;
        document.head.appendChild(userStyle);
    }, []);


    return (
        <div className="app">
            <Preset />
            <PageView />
            <CodeArea />      
        </div>
    )   
}