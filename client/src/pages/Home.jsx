import CustomPCBuild from "../components/CustomPcBuild";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CategoryGrid from "../components/CategoryGrid";

export default function Home() {
	return (
		<section className='bg-gradient-to-b	from-cyan-200 to-cyan-100 min-h-screen'>
			<Nav />
			<div className='flex md:flex-row flex-col'>
				<div className='md:w-1/2'>
					<CustomPCBuild />
				</div>
				<div className='md:w-1/2'>
					<CategoryGrid />
				</div>
			</div>
			<Footer />
		</section>
	);
}
