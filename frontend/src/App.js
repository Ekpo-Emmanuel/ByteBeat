import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        {/* <Route path='*'  element={<Notfound />}/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
