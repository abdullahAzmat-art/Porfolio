import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Careosal from './components/Careosal';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
<Layout>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Careosal />} />
    <Route path="/about" element={<About />} />
    <Route path='/project' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
  </Routes>
  </BrowserRouter>
</Layout>
    </div>
  );
}

export default App;
