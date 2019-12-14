import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import People from "../component/people";
import Planet from "../component/planet";
import Vehicle from "../component/vehicle";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<People />;<Planet />;<Vehicle />;
		</div>
	);
};
