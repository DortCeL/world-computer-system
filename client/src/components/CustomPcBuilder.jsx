import { useState } from "react";

// Define parts and prices for each category
const componentsData = {
	cpu: [
		{ id: 1, name: "Intel i7", price: 300 },
		{ id: 2, name: "AMD Ryzen 5", price: 250 },
		{ id: 3, name: "Intel i5", price: 200 },
	],
	motherboard: [
		{ id: 4, name: "ASUS Prime", price: 150 },
		{ id: 5, name: "MSI Pro", price: 130 },
		{ id: 6, name: "Gigabyte Aorus", price: 170 },
	],
	ram: [
		{ id: 7, name: "Corsair 16GB", price: 80 },
		{ id: 8, name: "G.Skill 32GB", price: 150 },
	],
	gpu: [
		{ id: 9, name: "NVIDIA RTX 3080", price: 700 },
		{ id: 10, name: "AMD RX 6800", price: 600 },
	],
	ssd: [
		{ id: 11, name: "Samsung 1TB", price: 120 },
		{ id: 12, name: "Kingston 500GB", price: 60 },
	],
	hdd: [
		{ id: 13, name: "Seagate 2TB", price: 80 },
		{ id: 14, name: "WD 1TB", price: 50 },
	],
	powerSupply: [
		{ id: 15, name: "Corsair 650W", price: 120 },
		{ id: 16, name: "Cooler Master 750W", price: 140 },
	],
	casing: [
		{ id: 17, name: "NZXT H510", price: 100 },
		{ id: 18, name: "Corsair 4000D", price: 90 },
	],
	keyboard: [
		{ id: 19, name: "Logitech G Pro", price: 120 },
		{ id: 20, name: "Razer BlackWidow", price: 150 },
	],
	mouse: [
		{ id: 21, name: "Logitech G502", price: 80 },
		{ id: 22, name: "Razer DeathAdder", price: 70 },
	],
};

const CustomPCBuilder = () => {
	const [selectedParts, setSelectedParts] = useState({
		cpu: "",
		motherboard: "",
		ram: "",
		gpu: "",
		ssd: "",
		hdd: "",
		powerSupply: "",
		casing: "",
		keyboard: "",
		mouse: "",
	});

	const handlePartSelection = (category, partId) => {
		setSelectedParts((prevSelectedParts) => ({
			...prevSelectedParts,
			[category]: partId,
		}));
	};

	const calculateTotalPrice = () => {
		return Object.keys(selectedParts).reduce((total, category) => {
			const selectedPartId = selectedParts[category];
			if (!selectedPartId) return total;

			const selectedPart = componentsData[category].find(
				(part) => part.id === Number(selectedPartId)
			);
			return total + (selectedPart ? selectedPart.price : 0);
		}, 0);
	};

	return (
		<div className='flex space-x-4 p-4 max-w-7xl mx-auto '>
			{/* Left Column - Selections */}
			<div className='w-2/3 h-screen  grid grid-cols-1 gap-4 '>
				{Object.keys(componentsData).map((category) => (
					<div key={category} className='flex flex-col space-y-2'>
						<label className='font-semibold capitalize'>{category}</label>
						<select
							className='p-2 border rounded'
							value={selectedParts[category]}
							onChange={(e) => handlePartSelection(category, e.target.value)}
						>
							<option value=''>Select {category}</option>

							{componentsData[category].map((part) => (
								<option key={part.id} value={part.id}>
									{part.name} (${part.price})
								</option>
							))}
						</select>
					</div>
				))}
			</div>

			{/* Right Column - Sticky Total Price */}
			<div className='w-1/3'>
				<div className='sticky top-4 p-4 border border-gray-300 rounded shadow-md bg-white'>
					<h2 className='text-2xl font-semibold mb-4'>Total Price</h2>
					<p className='text-lg font-bold'>৳{calculateTotalPrice()}</p>
				</div>
			</div>
		</div>
	);
};

export default CustomPCBuilder;
