import CustomPCBuilder from "../components/CustomPcBuilder";
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
						<div className='relative md:ml-10 md:mr-10'>
							<div className='absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm rounded-3xl'></div>
							<div className='relative text-white p-6'>
								<h1 className='font-orbitron md:text-xl lg:text-2xl text-md text-center mb-4'>
									Welcome to{" "}
									<span className='text-red-400 md:text-3xl lg:text-4xl text-xl'>
										World Computer System
									</span>
								</h1>
								<h2 className='font-roboto md:text-md lg:text-lg text-sm text-center mx-auto mb-6'>
									Build your <span className='text-blue-400'>Dream PC</span>{" "}
									today!
								</h2>
								<a href='#custom-pc-build'>
									<button
										className='bg-gradient-to-r from-red-600 to-blue-600 text-white 
														font-roboto px-6 py-3 rounded-lg block mx-auto shadow-inner 
														hover:from-red-700 hover:to-blue-700'
									>
										Start Building
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='custom-pc-build' className='py-20'>
				<CustomPCBuilder />
			</section>

			<Footer />
		</>
	);
}
