import CustomPCBuild from "../components/CustomPcBuild";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CategoryGrid from "../components/CategoryGrid";

export default function Home() {
	return (
		<>
			<section className='relative w-full md:h-screen flex md:block flex-col justify-center bg-hero-pc bg-center bg-cover'>
				<div className='absolute inset-0 bg-black bg-opacity-65'></div>{" "}
				{/* Dark overlay */}
				<Nav />
				{/* Hero er uporer section */}
				<div className='flex justify-center items-center py-28 md:flex-row flex-col relative z-5'>
					<div className='flex items-center justify-center'>
						<div className='text-white md:ml-10 md:mr-10 '>
							<h1 className=' font-orbitron text-4xl font-bold mb-4 '>
								Welcome to World Computer System
							</h1>
							<p className=' font-roboto text-lg mb-6'>
								We provide custom PC builds and the best computer peripherals
								for your needs.
							</p>
							<button className='bg-blue-500 hover:bg-blue-600 text-white font-roboto px-6 py-3 rounded-lg'>
								Get Started
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
