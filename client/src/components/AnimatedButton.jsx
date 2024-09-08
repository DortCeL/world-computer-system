import React from "react";

const AnimatedButton = () => {
	return (
		<button className='relative block mx-auto px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-200 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl overflow-hidden'>
			<span className='absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-600 opacity-50 animate-pulse'></span>
			<span className='relative'>Start Building</span>
		</button>
	);
};

export default AnimatedButton;
