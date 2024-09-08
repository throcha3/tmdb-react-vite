import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
	return (
		<nav id="navbar">
			<h2>
				<Link to="/">
					<BiCameraMovie />
					Movies List
				</Link>
			</h2>
			<form>
				<input type="text" placeholder="Search a Movie" />
				<button type="submit">
					<BiSearchAlt2 />
				</button>
			</form>
		</nav>
	);
};

export default NavBar;
