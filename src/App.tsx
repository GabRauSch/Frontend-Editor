import './styles/code.css';
import './styles/presets.css';
import './styles/global.css';
import './styles/dark.css';
import './styles/pageView.css';
import { Preset } from './components/Preset';
import { PageView } from './components/PageView';
import { CodeArea } from './components/CodeArea';
import { ElementProvider } from './Redux/ElementContext';


function App() {
  return (
    <div className="app">
      <ElementProvider>
        <Preset />
        <PageView />
      </ElementProvider>
      <CodeArea />      
    </div>
  );
}

export default App;
