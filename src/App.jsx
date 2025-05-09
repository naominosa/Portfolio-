import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Firstscreen from './Firstscreen';
import NavbarClose from './NavBarClose';
import WorkScreen from './WorkScreen';
import AboutMeScreen from './AboutMeScreen';
import ColorDropdown from './colorDropdown';

function App() {
  const backgroundColor = useSelector((state) => state.background.color);

  return (
    <div style={{ backgroundColor, minHeight: '100vh', transition: 'background-color 0.3s ease-in-out' }}>
      <ColorDropdown />

      <Routes>
        <Route path="/" element={<Firstscreen />} />
        <Route path="/FirstScreen" element={<Firstscreen />} />
        <Route path="/NavbarClose" element={<NavbarClose />} />
        <Route path="/WorkScreen" element={<WorkScreen />} />
        <Route path="/AboutMeScreen" element={<AboutMeScreen />} />
      </Routes>

      <div className="footer">
        <p>&copy; 2025. by nosanaomi</p>
      </div>
    </div>
  );
}

export default App;


