import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const People = () => {
	const { store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1>StartWars</h1>
			<div className="scrolling-wrapper">
				{store.people.map((item, index) => {
					return (
						<div key={index} className="card">
							<img
								src="https://vignette.wikia.nocookie.net/es.starwars/images/6/68/Star_Wars_Enciclopedia_de_Personajes-_Actualizada_y_Ampliada.jpg/revision/latest?cb=20170925173227"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">{item.hair_color}</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
							<div className="card-footer">
								<Link to={"/single-people/" + index}>
									<button className="btn btn-info"> Info</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default People;
