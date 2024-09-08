import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PcBuilder from "./pages/PcBuilder";
import Products from "./pages/Products";
import Showcase from "./pages/Showcase";
import Footer from "./components/Footer";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pc-builder' element={<PcBuilder />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/products' element={<Products />} />
				<Route path='/showcase' element={<Showcase />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}
