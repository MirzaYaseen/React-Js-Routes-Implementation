import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import AssignStudent from './pages/AssignStudent';
import GetMaterial from './pages/GetMaterial';
import GetAssign from './pages/GetAssign';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/assignstudent' extact element={<AssignStudent/>}/>
      <Route path='/getmaterial' element={<GetMaterial/>}/>
      <Route path='/getassign' element={<GetAssign/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;