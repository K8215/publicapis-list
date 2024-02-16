import React from "react";
import { useState, useEffect } from "react";
import Controls from "./Controls";

export default function ApiList() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [hideCors, setHideCors] = useState(false);

	useEffect(() => {
		async function getData() {
			try {
				const res = await fetch("https://api.publicapis.org/entries");
				const jsonRes = await res.json();
				const entries = jsonRes.entries;

				console.log(entries);
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
				<>
					<Controls hideCors={hideCors} setHideCors={setHideCors} />

					<ul className="api-list-wrapper">
						{data.map((entry, index) => (
							<li
								className={
									hideCors === true && entry.Cors == "yes"
										? `api-list-item hidden`
										: `api-list-item`
								}
								key={`list-item-${index}`}
							>
								<a href={entry.Link} target="_blank">
									{entry.API}
								</a>
								<p class="api-list-description">{entry.Description}.</p>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
}
