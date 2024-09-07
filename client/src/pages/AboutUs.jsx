const AboutUs = () => {
	return (
		<section className='bg-gray-100 py-12'>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col md:flex-row items-center'>
					{/* Image Section */}
					<div className='w-full md:w-1/2 mb-6 md:mb-0'>
						<img
							className='w-full h-auto rounded-lg shadow-md'
							src='https://via.placeholder.com/500' // Replace with a relevant image
							alt='World Computer System'
						/>
					</div>
					{/* Text Section */}
					<div className='w-full md:w-1/2 md:pl-12'>
						<h2 className='text-4xl font-bold text-gray-800 mb-4'>
							About World Computer System
						</h2>
						<p className='text-lg text-gray-600 mb-4'>
							Welcome to{" "}
							<span className='font-semibold text-gray-900'>
								World Computer System
							</span>
							, your trusted partner in building custom PCs and providing
							top-notch computer peripherals. With years of expertise, we are
							dedicated to offering high-quality products and excellent customer
							service. Whether you’re a gamer, a creative professional, or
							someone who just loves cutting-edge technology, we’ve got you
							covered.
						</p>
						<p className='text-lg text-gray-600 mb-6'>
							Our mission is simple: to help you build the perfect PC tailored
							to your needs and to offer a wide range of computer accessories
							and peripherals that enhance your experience.
						</p>
						<a
							href='#contact'
							className='bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'
						>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
