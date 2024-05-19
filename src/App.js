import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NoteState from './contextNotes/NoteState';
import Alert from './components/Alert';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlogPage from './pages/BlogPage';
import Blog from './pages/Blog'
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<BlogPage showAlert={showAlert}/>}/>
          <Route exact path="/blog/:id" element={<Blog showAlert={showAlert} />} />
          <Route exact path="/home" element={<Home showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
        </Routes>
        </div>
    </Router>
        </NoteState>
    </>
  );
}

export default App;
