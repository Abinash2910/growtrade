// const { model } = require("mongoose");

// const { PositionsSchema } = require("../schemas/PositionsSchema");

// const PositionsModel = new model("position", PositionsSchema);

// module.exports = { PositionsModel };







import { model } from "mongoose";
// IMPORTANT: You MUST include the .js extension here:
import { PositionsSchema } from "../schemas/PositionsSchema.js";

const PositionsModel = model("position", PositionsSchema);

export { PositionsModel };