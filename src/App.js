
import './App.css';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Heropage from './Components/Heropage';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<Heropage />} />
            <Route path="menu" element={<Menu/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contactus/>} />
            
            
        </Routes>
        <Footer />
      
      </BrowserRouter>
    </>
  );
}

export default App;
