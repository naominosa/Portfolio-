import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Firstscreen from './Firstscreen'
import NavbarClose from './NavBarClose';
import WorkScreen from './WorkScreen';

function App() {

  return (
 <>
  <Routes>
        <Route path="/" element={<Firstscreen />} /> 
        <Route path="/FirstScreen" element={<Firstscreen />} /> 
        <Route path="/NavbarClose" element={<NavbarClose />} /> 
        <Route path='/WorkScreen'element={<WorkScreen/>}/>

      </Routes>
 </>
    
   
  )
}

export default App
