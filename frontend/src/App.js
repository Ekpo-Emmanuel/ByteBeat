import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notfound from './pages/Notfound';
import Post from './pages/Post';
import Contact from './pages/Contact';
import AdminPost from './pages/AdminPost';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/post/:id'  element={<Post />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/contact'  element={<Contact />}/>
        <Route path='/backend/post'  element={<AdminPost />}/>
        <Route path='*'  element={<Notfound />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
