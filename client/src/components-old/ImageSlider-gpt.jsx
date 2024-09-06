import React, { useState, useEffect } from "react";
import deal1 from "../assets/deals/deal1.jpg";
import deal2 from "../assets/deals/deal2.jpg";
import deal3 from "../assets/deals/deal3.jpg";
import deal4 from "../assets/deals/deal4.jpg";

const ImageSlider = () => {
	const images = [deal1, deal2, deal3, deal4];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000); // Change slide every 3 seconds

		return () => clearInterval(interval);
	}, [images.length]);

	const handlePrevClick = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<div className='relative w-full max-w-md mx-auto'>
			<div className='overflow-hidden rounded-lg'>
				<div
					className='flex transition-transform duration-500'
					style={{
						transform: `translateX(-${currentIndex * 100}%)`,
						width: "100%",
					}}
				>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Slide ${index + 1}`}
							className='w-auto max-h-screen object-cover rounded-lg'
						/>
					))}
				</div>
			</div>

			{/* Navigation buttons */}
			<button
				onClick={handlePrevClick}
				className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 text-black rounded-full p-2'
			>
				&lt;
			</button>
			<button
				onClick={handleNextClick}
				className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 text-black rounded-full p-2'
			>
				&gt;
			</button>

			{/* Pagination dots */}
			<div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full ${
							index === currentIndex ? "bg-white" : "bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
