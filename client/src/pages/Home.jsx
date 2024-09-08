import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
	return (
		<>
			<div className='sticky z-10 top-0'>
				<Nav />
			</div>
			<Hero />
			<Footer />
		</>
	);
}
