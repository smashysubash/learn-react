import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './component/login';
import { Signup } from './component/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
