import CustomPCBuild from "../components/CustomPcBuild";
import Nav from "../components/Nav";

export default function Home() {
	return (
		<section className='bg-custom-gradient'>
			<Nav />
			<CustomPCBuild />
		</section>
	);
}
