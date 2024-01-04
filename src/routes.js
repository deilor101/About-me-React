import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/About-me";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "./components/DefaultPage";
import Posts from "pages/Posts";
import NotFound from "pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<DefaultPage/>}>
          <Route index path="/" element={ <Home/> } />
          <Route path="/sobremim" element={ <AboutMe/> } />         
        </Route>

        <Route path="posts/:id/*" element={<Posts />} />     
        <Route path="*" element={ <NotFound/> } />  
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
