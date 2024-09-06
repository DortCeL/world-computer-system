import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-gray-400 py-10'>
			<div className='container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
				{/* About Section */}
				<div>
					<h3 className='text-white text-xl font-semibold mb-4'>About Us</h3>
					<p>
						We are a leading computer store providing the best in computer
						parts, custom builds, and accessories. Our mission is to deliver
						quality and satisfaction to our customers.
					</p>
				</div>

				{/* Links Section */}
				<div>
					<h3 className='text-white text-xl font-semibold mb-4'>Quick Links</h3>
					<ul className='space-y-2'>
						<li>
							<a href='#' className='hover:text-white'>
								Home
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-white'>
								Shop
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-white'>
								Privacy Policy
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-white'>
								Terms of Service
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-white'>
								Contact Us
							</a>
						</li>
					</ul>
				</div>

				{/* Social Media Section */}
				<div>
					<h3 className='text-white text-xl font-semibold mb-4'>Follow Us</h3>
					<div className='flex space-x-4'>
						<a href='#' className='text-gray-400 hover:text-white'>
							<FaFacebook size={24} />
						</a>
						<a href='#' className='text-gray-400 hover:text-white'>
							<FaTwitter size={24} />
						</a>
						<a href='#' className='text-gray-400 hover:text-white'>
							<FaInstagram size={24} />
						</a>
						<a href='#' className='text-gray-400 hover:text-white'>
							<FaLinkedin size={24} />
						</a>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className='border-t border-gray-700 mt-8 pt-6 text-center'>
				<p className='text-gray-500'>
					&copy; {new Date().getFullYear()} World Computer System. All Rights
					Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
