import './App.css';

import Portal1 from "./Portal1"
import Portal2 from "./Portal2"

import { BrowserRouter,Route,Routes } from 'react-router-dom';



function App() {
  return (<>

  <BrowserRouter>



      <Routes>
         <Route path='/' element={<Portal1/>}/>
         <Route path='/:id' element={<Portal2/>}/>

         <Route path='/home' element={<Portal1/>}/>

      </Routes>

      </BrowserRouter>
     
      </>
  );
}

export default App;
