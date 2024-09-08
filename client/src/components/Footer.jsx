const Footer = () => {
	return (
		<footer className='bg-black text-white py-10 px-5 md:px-20'>
			<div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
				{/* Left Section - Logo and Description */}
				<div>
					<h2 className='text-2xl font-bold mb-4'>About us</h2>
					<p className='text-gray-400 mb-4'>
						Explore unrivaled deals on high-performance gaming rigs, elite
						workstations, premium TVs, and cutting-edge computer hardware.
						Tailored systems guarantee exceptional performance for work, gaming,
						and beyond.
					</p>
				</div>

				{/* Middle Section - Shop Categories */}
				<div>
					<h3 className='text-xl font-semibold mb-4'>SHOP CATEGORIES</h3>
					<ul className='text-gray-400 space-y-2'>
						<li>
							<a href='#' className='hover:underline'>
								Custom PC
							</a>
						</li>
						<li>
							<a href='#' className='hover:underline'>
								PC Components
							</a>
						</li>
						<li>
							<a href='#' className='hover:underline'>
								PC Peripherals
							</a>
						</li>
					</ul>
				</div>

				{/* Right Section - Contact Information */}
				<div>
					<h3 className='text-xl font-semibold mb-4'>CONTACT US</h3>
					<p className='text-gray-400'>
						Store Address: Shah ali plaza, floor no, shop no <br />
						Mirpur 10, Dhaka-1216
					</p>
					<p className='text-gray-400 mt-4'>
						Phone: <span className='text-orange-500'>+880mobilenumber</span>{" "}
						<br />
						10am - 8pm (Mon-Sat)
					</p>
					<p className='text-gray-400 mt-4'>
						<a
							href='mailto:support@modxcomputers.com'
							className='hover:underline text-orange-500'
						>
							wcstechnology@gmail.com
						</a>
					</p>

					{/* Social Media Icons */}
					<div className='flex space-x-3 mt-4'>
						<a href='#'>
							<i className='fab fa-facebook-f'>FB</i>
						</a>
						<a href='#'>
							<i className='fab fa-instagram'>Insta</i>
						</a>
						<a href='#'>
							<i className='fab fa-youtube'>YT</i>
						</a>
						<a href='#'>
							<i className='fab fa-whatsapp'>TikTok</i>
						</a>
					</div>
				</div>
			</div>
			<div className='mt-10 text-center text-gray-500 text-sm'>
				© 2024 World Computer System. All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;
