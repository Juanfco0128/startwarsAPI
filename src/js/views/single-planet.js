import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<div>
				<h1>{store.planets[props.match.params.planetId].name}</h1>
			</div>
			<div>{store.planets[props.match.params.planetId].rotation_period}</div>
			<div>{store.planets[props.match.params.planetId].terrain}</div>
			<div>{store.planets[props.match.params.planetId].climate}</div>
			<div>{store.planets[props.match.params.planetId].gravity}</div>
		</div>
	);
};
SinglePlanet.propTypes = {
	match: PropTypes.object
};
