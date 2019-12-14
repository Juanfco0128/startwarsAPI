import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SinglePeople = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<div>
				<h1>{store.people[props.match.params.peopleId].name}</h1>
			</div>
			<div>{store.people[props.match.params.peopleId].gender}</div>
			<div>{store.people[props.match.params.peopleId].mass}</div>
			<div>{store.people[props.match.params.peopleId].hair_color}</div>
			<div>{store.people[props.match.params.peopleId].eye_color}</div>
			<div>{store.people[props.match.params.peopleId].skin_color}</div>
		</div>
	);
};
SinglePeople.propTypes = {
	match: PropTypes.object
};
