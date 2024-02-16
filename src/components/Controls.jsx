import React from "react";

export default function Controls({ hideCors, setHideCors }) {
	function handleCheck() {
		hideCors ? setHideCors(false) : setHideCors(true);
	}
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
