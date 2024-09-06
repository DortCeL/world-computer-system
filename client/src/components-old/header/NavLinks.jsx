export default function NavLinks() {
	return (
		<>
			<div className='flex items-center gap-12 '>
				<a className='flex items-center hover:text-orange-500 px-8 py-6 cursor-pointer hover:scale-105'>
					<img
						src='src/assets/deals.svg'
						alt='Search Icon'
						className='h-10 mr-5'
					/>
					<span>Best deals</span>
				</a>
				<a className='flex items-center hover:text-orange-500 px-8 py-6 cursor-pointer hover:scale-105'>
					<img
						src='src/assets/info.svg'
						alt='Search Icon'
						className='h-6 mr-5'
					/>
					<span>About us</span>
				</a>
				<a className='flex items-center hover:text-orange-500 px-8 py-6 cursor-pointer hover:scale-105'>
					<img
						src='src/assets/cart.svg'
						alt='Search Icon'
						className='h-8 mr-5'
					/>
					<span>Cart</span>
				</a>
			</div>
		</>
	);
}
