import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./components/Menu";
import ParallaxHome from "./components/ParallaxHome";
// import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PackagesPage from "./components/PackagesPage";
import WorkshopsPage from "./components/WorkshopsPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<ParallaxHome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/"></Navigate>} />
      </Routes>
    </Router>
  );
}
