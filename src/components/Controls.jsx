import React, { useEffect } from "react";

export default function Controls({ hideCors, setHideCors, setTotal }) {
	//Toggle CORS APIs
	function handleCheck() {
		hideCors ? setHideCors(false) : setHideCors(true);
	}

	//Get new total
	useEffect(() => {
		const apiList = document.querySelector(".api-list-wrapper");
		const children = apiList.children;
		const initialTotal = children.length;
		let hiddenCount = 0;

		for (let i = 0; i < initialTotal; i++) {
			children[i].classList.contains("hidden") ? hiddenCount++ : "";
		}

		const newTotal = initialTotal - hiddenCount;

		setTotal(newTotal);
	}, [hideCors]);

	return (
		<div className="api-list-controls">
			<label id="hide-cors-label" htmlFor="hide-cors">
				<input
					type="checkbox"
					name="hide-cors"
					id="hide-cors"
					aria-labelledby="hide-cors-label"
					onChange={handleCheck}
				/>
				Hide APIs that require CORS
			</label>
		</div>
	);
}
