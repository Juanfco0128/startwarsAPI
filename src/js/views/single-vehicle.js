import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<div>
				<h1>{store.vehicle[props.match.params.index].name}</h1>
			</div>
			<div>{store.vehicle[props.match.params.index].model}</div>
			<div>{store.vehicle[props.match.params.index].manufacturer}</div>
			<div>{store.vehicle[props.match.params.index].vehicle_class}</div>
			<div>{store.vehicle[props.match.params.index].crew}</div>
			<div>{store.vehicle[props.match.params.index].length}</div>
		</div>
	);
};
SingleVehicle.propTypes = {
	match: PropTypes.object
};
