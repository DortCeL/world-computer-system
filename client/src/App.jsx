import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IntelPcBuild from "./pages/IntelPcBuild";
import AboutUs from "./pages/AboutUs";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/intel-pc-build' element={<IntelPcBuild />} />
				<Route path='/about-us' element={<AboutUs />} />
			</Routes>
		</BrowserRouter>
	);
}
