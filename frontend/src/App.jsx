import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel1 from "./components/Carousel1";
import Carousel2 from "./components/Carousel2";

export default function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-6 p-4 font-sans bg-gradient-to-r from-orange-600 to-yellow-400 text-red-500">
        <Link to="/carousel1" className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600 no-underline hover:no-underline font-bold text-2xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150">Carousel 1</Link>
        <Link to="/carousel2" className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600 no-underline hover:no-underline font-bold text-2xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150">Carousel 2</Link>
      </nav>

      <Routes>
        <Route path="/carousel1" element={<Carousel1 />} />
        <Route path="/carousel2" element={<Carousel2 />} />
      </Routes>
    </Router>
  );
}
