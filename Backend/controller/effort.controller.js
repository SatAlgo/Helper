import Effort from "../model/effort.model.js";

export const getEffort = async (req, res) => {
    try {
        const effort = await Effort.find();
        res.status(200).json(effort);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};