import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(search);
	};
	return (
		<nav id="navbar">
			<h2>
				<Link to="/">
					<BiCameraMovie />
					Movies List
				</Link>
			</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search a Movie"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<button type="submit">
					<BiSearchAlt2 />
				</button>
			</form>
		</nav>
	);
};

export default NavBar;
