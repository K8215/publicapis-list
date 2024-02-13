import React from "react";
import "./App.css";
import ApiList from "./components/ApiList";

function App() {
	return (
		<>
			{/* Returns full list from publicapis.org */}
			<h1>API List</h1>
			<ApiList />
		</>
	);
}

export default App;
