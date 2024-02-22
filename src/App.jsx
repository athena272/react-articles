import StandardPage from "./component/StandardPage/StandardPage";
import Footer from './component/Footer/Footer'
import ScrollToTop from './component/ScrollToTop/ScrollToTop'
import Menu from './component/Menu/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Post from "./pages/Post/Post";
import Home from './pages/Home/Home'
import AboutMe from "./pages/AboutMe/AboutMe";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<StandardPage />} >
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="*" element={<div>Página não encontrada</div>}></Route>
      </Routes> */}

      <Footer />
    </BrowserRouter>
  )
}