import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from './components/pages/Inicio'
import Login from './components/pages/Login'
import Menu from './components/shared/Menu'
import Footer from './components/shared/Footer'

function App() {
  return (
    <>
     <BrowserRouter>
     <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </>
  );
}

export default App;
