import "./App.css";
import "@splidejs/react-splide/css";
import {
  About,
  Home,
  News,
  Contact,
  Winery,
  Wines,
  Product,
  Error,
  Land,
  Blog,
  Tweets,
} from "./pages";
import { Footer, Navbar } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/land" element={<Land />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/blog" element={<Blog />} />
          <Route path="/news/winemaker-blog" element={<Tweets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/winery" element={<Winery />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/products.:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
