import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IntelPcBuild from "./pages/IntelPcBuild";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/intel-pc-build' element={<IntelPcBuild />} />
			</Routes>
		</BrowserRouter>
	);
}
