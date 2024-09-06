import Logo from "./header/Logo";
import NavLinks from "./header/NavLinks";

import styles from "./Header.module.css";

export default function Header() {
	return (
		<>
			<header
				className='top-o h-24 sticky z-[20] mx-auto w-full items-center flex justify-between px-36 
			 	text-white
			 		bg-gradient-to-r	from-indigo-500 to-indigo-950'
				{...styles}
			>
				<Logo />
				<div id='middle-section' className=''>
					<NavLinks />
				</div>
				<span className='hover:scale-110 cursor-pointer'>🛒 Cart</span>
			</header>
		</>
	);
}
