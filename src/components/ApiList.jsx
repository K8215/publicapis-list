import React from "react";
import { useState, useEffect } from "react";

export default function ApiList() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function getData() {
			try {
				const res = await fetch("https://api.publicapis.org/entries");
				const jsonRes = await res.json();
				const entries = jsonRes.entries;

				setData(entries);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}

		getData();
	}, []);

	return (
		<>
			{loading && <p className="api-list-loader">Loading...</p>}
			{error && <p className="api-list-error">ERROR: {error.message}</p>}
			{data && (
				<ul className="api-list-wrapper">
					{data.map((entry, index) => (
						<li className="api-list-item" key={`list-item-${index}`}>
							{entry.API}
						</li>
					))}
				</ul>
			)}
		</>
	);
}
