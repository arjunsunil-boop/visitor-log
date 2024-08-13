import logo from './logo.svg';
import './App.css';
import Add_visitor from './components/Add_visitor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View_all from './components/View_all';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Add_visitor/>} />
        <Route path="/view" element={<View_all/>} />
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
