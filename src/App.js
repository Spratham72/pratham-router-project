import './App.css';
import { Navbar } from './componenets/header';
import { Body } from './componenets/body';
import Typography from '@mui/material/Typography';
import {BrowserRouter} from "react-router-dom";
import {Route,Routes} from "react-router-dom";
import {Men} from './componenets/men';
import {Women} from './componenets/women';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Typography variant='h6' component="h2" align='center' gutterBottom>
     
    </Typography>
    <Routes >
      <Route path="/" element={<Body/>}></Route>
      <Route path="/men" element={<Men/>}></Route>
      <Route path="/women" element={<Women/>}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
