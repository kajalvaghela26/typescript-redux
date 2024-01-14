import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuItems from './MenuItems';

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MenuItems/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
