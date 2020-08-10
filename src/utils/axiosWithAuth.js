import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

export const axiosWithAuth = () => {
	const token = localStorage.getItem("refreshToken");

	return axios.create({
		headers: {
			Authorization: token,
			contentType: "application/json",
		},
		baseURL: url,
	});
};

export const client = () => {
	return axios.create({
		headers: {
			contentType: "application/json",
		},
		baseURL: url,
	});
};
