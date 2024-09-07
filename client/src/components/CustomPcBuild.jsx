import { Link } from "react-router-dom";

const CustomPCBuild = () => {
	const images = {
		intel: "./assets/intel-build.png",
		amd: "./assets/amd-build.png",
	};

	return (
		<div className='py-8 px-4'>
			<h1 className='text-4xl font-bold text-center mb-4'>
				Build Your Dream PC
			</h1>
			<p className='text-center mb-8'>
				Pick your favorite components and build your machine
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4'>
				{/* Intel Card */}
				<div className='border rounded-lg shadow-lg overflow-hidden'>
					{/* Card image */}
					<img
						src={images.intel}
						alt='Intel Custom PC'
						className='w-full object-cover'
					/>

					{/* Card details */}
					<div className='p-6'>
						<div className='flex items-center'>
							<h2 className='text-xl font-semibold'>Intel Custom PC Build</h2>
						</div>
						<div className='flex items-center mt-2'>
							<span className='text-yellow-500'>★★★★★</span>
							<span className='ml-2 text-sm text-gray-600'>In stock</span>
						</div>
						<p className='text-red-500 text-lg font-bold mt-4'>
							Starts From 30,000 Tk
						</p>
						<Link to='/intel-pc-build'>
							<button className='mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg'>
								Select Option
							</button>
						</Link>
					</div>
				</div>

				{/* AMD Card */}
				<div className='border rounded-lg shadow-lg overflow-hidden'>
					<img
						src={images.amd}
						alt='AMD Custom PC'
						className='w-full object-cover'
					/>
					<div className='p-6'>
						<div className='flex items-center'>
							<h2 className='text-xl font-semibold'>AMD Custom PC Build</h2>
						</div>
						<div className='flex items-center mt-2'>
							<span className='text-yellow-500'>★★★★★</span>
							<span className='ml-2 text-sm text-gray-600'>In stock</span>
						</div>
						<p className='text-red-500 text-lg font-bold mt-4'>
							Starts From 30,000 Tk
						</p>
						<Link to='/amd-pc-build'>
							<button className='mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg'>
								Select Option
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomPCBuild;
