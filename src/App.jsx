import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/home";

import Page01 from "./pages/page01";
import NotFound from "./pages/notfound";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeLink from "./components/HomeLink";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page01" element={<Page01 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <HomeLink />
      <Footer />
    </BrowserRouter>
  );
}

export default App; 