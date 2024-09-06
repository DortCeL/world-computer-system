import CustomPCBuild from "./components/CustomPcBuild";
import Nav from "./components/Nav";

export default function App() {
	return (
		<>
			<section className='bg-hero-bg h-screen bg-center bg-cover'>
				<Nav />
				<CustomPCBuild />
			</section>
		</>
	);
}
