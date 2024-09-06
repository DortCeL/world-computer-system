import React from "react";

const SearchForm = () => {
	return (
		<div className='max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg'>
			<form className='space-y-4'>
				{/* Product Name Input Field */}
				<div>
					<label
						htmlFor='productName'
						className='block text-lg font-semibold text-gray-700'
					>
						Product Name
					</label>
					<input
						type='text'
						id='productName'
						name='productName'
						placeholder='Enter product name'
						className='mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>

				{/* Search Button */}
				<div>
					<button
						type='submit'
						className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
					>
						Search
					</button>
				</div>

				{/* Subtext */}
				<div className='text-sm text-gray-500 text-center'>
					Find the best products at the best prices.
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
