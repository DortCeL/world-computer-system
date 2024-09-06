import React, { useState } from "react";

const DealsSection = () => {
	const images = [
		"src/assets/deals/deal1.jpg",
		"src/assets/deals/deal2.jpg",
		"src/assets/deals/deal3.jpg",
		"src/assets/deals/deal4.jpg",
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className='flex flex-col items-center justify-between  rounded-2xl drop-shadow-2xl'>
			{/* Text Section */}
			<h2 className='text-2xl mb-6 font-bold text-gray-600'>
				Checkout Our Best Deals
			</h2>

			{/* //$ Image Slider Section*/}
			<div className=' w-4/5 max-w-[800px] flex flex-row gap-6 items-center'>
				{/* Navigation Button Left */}
				<button onClick={handlePrevClick} className='text-3xl px-2'>
					&#10094;
				</button>

				{/* Image Slider */}
				<div className='rounded-xl shadow-md overflow-hidden'>
					<img
						src={images[currentIndex]}
						alt={`Deal ${currentIndex + 1}`}
						className='w-full h-auto max-h-[600px] object-contain transition-transform duration-500 ease-in-out transform'
					/>
				</div>

				{/* Navigation Button Right */}
				<button onClick={handleNextClick} className='text-3xl px-2'>
					&#10095;
				</button>
			</div>

			<button className='mt-4 px-6 py-2 w-1/4 mx-auto bg-blue-500 text-white font-semibold rounded hover:bg-blue-600'>
				See More
			</button>
		</div>
	);
};

export default DealsSection;
