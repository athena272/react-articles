import StandardPage from "./component/StandardPage/StandardPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import AboutMe from "./pages/AboutMe/AboutMe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="*" element={<div>Página não encontrada</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}