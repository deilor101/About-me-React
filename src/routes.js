import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/About-me";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "./components/DefaultPage";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<DefaultPage/>}>
          <Route path="/" element={ <Home/> } />
          <Route path="/sobremim" element={ <AboutMe/> } />
        </Route>     
      <Route path="*" element={ <div>Página não encontrada</div> } />  
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;