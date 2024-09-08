import Nav from "../components/Nav";

export default function Products() {
	return (
		<>
			<Nav />
			<div id='products' className='my-28 text-4xl font-extrabold text-center'>
				Products
			</div>
			<div
				id='products'
				className='my-28 text-4xl font-extrabold text-center text-red-500'
			>
				Work in Progress...
			</div>
		</>
	);
}
