import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "HOME", route: "/" },
		{ name: "PRODUCTS", route: "/products" },
		{ name: "SHOWCASE", route: "/showcase" },
		{ name: "ABOUT US", route: "/about-us" },
		{ name: "PC BUILDER", route: "/pc-builder" },
	];

	return (
		<nav className='bg-black absolute w-full top-0 z-10 flex justify-between items-center py-3'>
			<Link to='/'>
				<div className='flex flex-row items-center gap-6'>
					<img
						src='./assets/wcs-logo.png'
						alt='WCS'
						className='lg:w-24 w-20 lg:ml-16 ml-7 cursor-pointer'
					/>
					<h1 className='md:block hidden text-2xl font-orbitron text-white'>
						World Computer System
					</h1>
				</div>
			</Link>

			<img
				src={isOpen ? "./assets/icon-close.svg" : "./assets/icon-hamburger.svg"}
				className='z-20 fixed right-5 top-6 cursor-pointer lg:hidden'
				onClick={() => setIsOpen(!isOpen)}
			/>

			<ul
				className={`bg-[#080808b0] lg:bg-[#5f5a5a54] lg:rounded-l-full backdrop-blur-lg lg:pl-10 md:pr-48 pr-20 z-10
				lg:static fixed top-0 lg:h-auto h-screen duration-300 ease-in-out ${
					!isOpen ? "right-[-100%]" : "right-0"
				}
			`}
			>
				{navLinks.map((navlink, index) => (
					<li
						key={index}
						className='lg:inline-block lg:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-200
						lg:my-0 my-6 cursor-pointer
						'
					>
						<Link to={navlink.route}>
							<a className='text-white text-lg lg:py-5 py-3 inline-block font-roboto'>
								{navlink.name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
