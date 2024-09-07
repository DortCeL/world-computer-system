const categories = [
	{
		name: "Processor",
		color:
			"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
		icon: "/assets/accessories/cpu.svg",
	},
	{
		name: "Motherboard",
		color:
			"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
		icon: "/assets/accessories/cpu.svg",
	},
	{
		name: "Storage",
		color:
			"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
		icon: "/assets/accessories/cpu.svg",
	},
	{
		name: "RAM",
		color:
			"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
		icon: "/assets/accessories/cpu.svg",
	},
	{
		name: "Keyboard",
		color:
			"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
		icon: "/assets/accessories/cpu.svg",
	},
	{
		name: "Mouse",
		color:
			"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
		icon: "/assets/accessories/cpu.svg",
	},
	{
		name: "Headset",
		color:
			"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
		icon: "/assets/accessories/cpu.svg",
	},
];

const CategoryGrid = () => {
	return (
		<>
			<h1 className='text-4xl font-bold text-center mb-4 pt-8'>Components</h1>
			<div className='py-20 px-16 grid grid-cols-5 gap-8'>
				{categories.map((category, index) => (
					<div
						key={index}
						className={`p-6 ${category.color} rounded-lg text-black flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105 glossy-effect`}
					>
						<img src={categories.icon} alt='' />
						<h3 className='mt-2 text-lg font-bold'>{category.name}</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default CategoryGrid;
