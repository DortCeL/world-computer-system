import React from "react";
import Nav from "../components/Nav";
import InstagramFeed from "../components/InstagramFeed";
import Footer from "../components/Footer";

export default function Showcase() {
	return (
		<>
			<Nav />
			<div className='my-28 mx-80 text-4xl font-extrabold text-center'>
				<InstagramFeed />
			</div>
			<Footer />
		</>
	);
}
