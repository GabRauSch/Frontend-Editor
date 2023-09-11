import { CodeArea } from "../components/CodeArea"
import { PageView } from "../components/PageView"
import { Preset } from "../components/preset/Preset"

export const Editor = ()=>{
    return (
        <div className="app">
                <Preset />
                <PageView />
            <CodeArea />      
        </div>
    )   
}