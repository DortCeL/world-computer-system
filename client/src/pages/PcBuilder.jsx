import PcBuilderComponent from "../components/PcBuilderComponent";
import Nav from "../components/Nav";

const PcBuilder = () => {
	return (
		<>
			<Nav />
			<div
				id='products'
				className='my-28 text-4xl font-extrabold text-center text-red-500'
			>
				Work in Progress...
			</div>
			<PcBuilderComponent />
		</>
	);
};

export default PcBuilder;
