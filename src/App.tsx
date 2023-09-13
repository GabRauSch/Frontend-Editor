import './styles/code.css';
import './styles/presets.css';
import './styles/global.css';
import './styles/dark.css';
import './styles/pageView.css';
import { Preset } from './components/preset/Preset';
import { PageView } from './components/pageView/PageView';
import { CodeArea } from './components/CodeArea';
import { ContextProvider } from './contexts/Context';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Editor } from './pages/editor';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/application/:id" element={<Editor />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
