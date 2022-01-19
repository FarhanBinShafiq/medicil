
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Contact from './Pages/Login/Contact/Contact';
 
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';




function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="home" element={<Home></Home>} />
          <Route  path="contact" element={<Contact></Contact>} />
          <Route  path="login" element={<Login></Login>} />
          <Route path='*' element={<NotFound></NotFound>}/>

          

        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
