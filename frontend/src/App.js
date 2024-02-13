import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notfound from './pages/Notfound';
import Post from './pages/Post';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/post/:id'  element={<Post />}/>
        <Route path='/contact'  element={<Contact />}/>
        <Route path='*'  element={<Notfound />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
