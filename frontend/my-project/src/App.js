import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Body from './Components/Body';
import Form from './Components/Form';

function App() {
  return (
    <>
   
    <BrowserRouter>
    
      
      
      <Routes>
        <Route path='/' element={<Body />}/> 
        <Route path='/form' element={<Form /> } />
      </Routes>
    
  </BrowserRouter>
  </>
  );
}

export default App;
