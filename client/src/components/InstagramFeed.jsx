import React, { useEffect } from "react";

const InstagramFeed = () => {
	useEffect(() => {
		// Dynamically load the LightWidget script
		const script = document.createElement("script");
		script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<div className='flex justify-center my-6'>
			<iframe
				src='//lightwidget.com/widgets/0bb0f7049d395462b6d16baf6b102ee9.html'
				className='lightwidget-widget'
				style={{
					width: "100%",
					border: 0,
					overflow: "hidden",
					height: "500px",
				}}
				title='Instagram Feed'
			></iframe>
		</div>
	);
};

export default InstagramFeed;
