import { address } from "../database/addressDatabase.js";

export const getAllAddrees = (req, res) => {
	res.status(200).json(address);
};
