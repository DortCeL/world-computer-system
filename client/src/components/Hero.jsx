export default function Hero() {
	return (
		<>
			<section id='hero' className='w-full h-screen'>
				<img
					className='top-0 left-0 w-full h-screen object-cover'
					src='/assets/hero-pc-landscape.jpeg'
					alt='Hero BG'
				/>

				<div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />

				{/*//! Middle box Container*/}
				<div className='absolute top-0 h-full w-full flex flex-col justify-center items-center  text-white '>
					{/*//* Middle box */}
					<div className='max-w-[1100px] px-10 py-8 bg-black bg-opacity-40 backdrop-blur-md rounded-xl flex flex-col gap-4 drop-shadow-2xl'>
						<h1 className='font-orbitron text-center text-xl'>
							Welcome to{" "}
							<span className='text-red-400 text-4xl'>
								World Computer System
							</span>
						</h1>
						<p className='font-roboto text-center'>
							Build your <span className='text-blue-400'>Dream PC</span> today!
						</p>
						<a href='/pc-builder'>
							<button
								className='bg-gradient-to-r from-red-700 to-blue-700
              font-roboto px-6 py-4 rounded-lg block mx-auto
              hover:from-red-800 hover:to-blue-800 text-white text-lg font-extrabold shadow-lg'
							>
								START BUILDING
							</button>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
