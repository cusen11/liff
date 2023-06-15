
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DowloadPage from './Pages/DowloadPage';
// import HomePage from './Pages/HomePage';
import HomePage1 from './Pages/HomePage1';


function App() {
 
  return (
    <BrowserRouter>   
        <Routes>  
          {/* <Route path="/" element={<HomePage/>}/>   */}
          <Route path="/" element={<HomePage1/>}/>  
          <Route path="/dowload" element={<DowloadPage/>}/>  
        </Routes>  
  </BrowserRouter> 
  );
}

export default App;
