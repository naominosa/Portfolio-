import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Firstscreen from './Firstscreen'
import NavbarClose from './NavBarClose';
import WorkScreen from './WorkScreen';
import AboutMeScreen from './AboutMeScreen';
function App() {
  alert('Still Under Production!')

  return (
 <>
  <Routes>
        <Route path="/" element={<Firstscreen />} /> 
        <Route path="/FirstScreen" element={<Firstscreen />} /> 
        <Route path="/NavbarClose" element={<NavbarClose />} /> 
        <Route path='/WorkScreen'element={<WorkScreen/>}/>
        <Route path='/AboutMeScreen' element={<AboutMeScreen/>}/>

      </Routes>
      <div className="footer">
   <p>&copy; 2025.by nosanaomi</p>
   </div>
 </>
    
   
  )
}

export default App
