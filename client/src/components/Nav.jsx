import { useState } from "react";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "BEST DEALS" },
		{ name: "PRODUCTS" },
		{ name: "SERVICES" },
		{ name: "ABOUT US" },
	];

	return (
		<nav className=' flex justify-between items-center pt-5'>
			<img
				src='./assets/wcs-logo.png'
				alt='WCS'
				className='md:w-36 w-20 md:ml-16 ml-7 cursor-pointer'
			/>

			<img
				src={isOpen ? "./assets/icon-close.svg" : "./assets/icon-hamburger.svg"}
				className='z-20 fixed right-5 top-6 cursor-pointer md:hidden'
				onClick={() => setIsOpen(!isOpen)}
			/>

			<ul
				className={`bg-[#2b232350] md:rounded-l-full backdrop-blur-lg md:pl-10 md:pr-48 pr-20 z-10
				md:static fixed top-0 md:h-auto h-screen duration-300 ease-in-out ${
					!isOpen ? "right-[-100%]" : "right-0"
				}
			`}
			>
				{navLinks.map((navlink, index) => (
					<li
						key={index}
						className='md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-200
						md:my-0 my-6 cursor-pointer
						'
					>
						<a className='text-white text-xl md:py-5 py-3 inline-block font-normal'>
							{navlink.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
