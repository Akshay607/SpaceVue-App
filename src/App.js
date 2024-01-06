
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />}></Route>
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App;

