 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';  
 import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header'; 
import Weather from './Projects/WeatherApp/Weather'; 

function App() {
  return (
    <div className="App"> 
        <Header /> 
          <Routes> 
          <Route path="Weather" element={<Weather />} /> 
          </Routes>  
    </div>
  );
}

export default App;
