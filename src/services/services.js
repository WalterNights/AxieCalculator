var axios = require("axios").default;

var options = {
	//method: 'GET',
	//url: 'https://axie-infinity.p.rapidapi.com/get-axies/0x96947c7e8c4c8d1546c905f8aedf977e48e6ae23',
	headers: {
		'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
		'x-rapidapi-key': 'cf35ff52c0mshf319364772d57fdp13666ajsndddcd6e13ba7'
	}
};

export const getApiResponse = async () => {
	const response = await axios.get('https://axie-infinity.p.rapidapi.com/get-axies/0x96947c7e8c4c8d1546c905f8aedf977e48e6ae23', options)
	const teamAxies = response.data.data.axies.results
	return teamAxies
}
