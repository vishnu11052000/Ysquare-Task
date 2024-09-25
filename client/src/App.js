import logo from './logo.svg';
import './App.css';
import Register from './components/signin';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom'; 
import Main from './components/home';
import {Toaster} from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      

      

      <Toaster position='top-center' toastOptions={{duration:7000}}/>

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signin' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Main/>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
