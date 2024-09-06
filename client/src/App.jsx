import CustomPCBuild from "./components/CustomPcBuild";
import Nav from "./components/Nav";

export default function App() {
	return (
		<>
			<section className='bg-custom-gradient bg-center bg-cover'>
				<Nav />
				<CustomPCBuild />
			</section>
		</>
	);
}
