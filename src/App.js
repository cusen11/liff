
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DowloadPage from './Pages/DowloadPage';
import HomePage from './Pages/HomePage';


function App() {
 
  return (
    <BrowserRouter>   
        <Routes>  
          <Route path="/" element={<HomePage/>}/>  
          <Route path="/dowload" element={<DowloadPage/>}/>  
        </Routes>  
  </BrowserRouter> 
  );
}

export default App;
