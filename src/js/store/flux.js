const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPlanets: () => {
				fetch("https://swapi.co/api/planets")
					.then(response => response.json())
					.then(data => {
						console.log("p", data);
						setStore({ planets: data.results });
					});
			},
			loadVehicles: () => {
				fetch("https://swapi.co/api/vehicles")
					.then(response => response.json())
					.then(data => {
						console.log("ppppppppppppp", data);
						setStore({ vehicles: data.results });
					});
			},
			loadPeople: () => {
				fetch("https://swapi.co/api/people")
					.then(response => response.json())
					.then(data => {
						console.log("pp", data);
						setStore({ people: data.results });
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
