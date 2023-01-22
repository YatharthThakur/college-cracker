import LandingPage from "./Components/LandingPage";
import RegisterPage from "./Components/RegisterPage";
import HomePage from "./Components/HomePage";
import SettingsPage from "./Components/SettingsPage";
import AddCollegePage from "./Components/AddCollegePage";
import UpdateCollege from "./Components/UpdateCollege"; 
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/add-college" element={<AddCollegePage/>}/>
        <Route path="/update-college" element={<UpdateCollege />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
