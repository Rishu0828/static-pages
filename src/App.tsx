import './App.css'
import About from './pages/About'
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact"
import RefundAndCancellation from './pages/RefundAndCancellation';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <div className='w-full bg-[#121212] text-[#CCCCCC] font-inter min-h-screen'>
      <AboutUs/>
 
    <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refund-and-cancellation" element={<RefundAndCancellation />} />
      
    </Routes>
      
    </div>
  )
}

export default App
