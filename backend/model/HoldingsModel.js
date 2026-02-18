// const { model } = require("mongoose");

// const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// const HoldingsModel = new model("holding", HoldingsSchema);

// module.exports = { HoldingsModel };







import { model } from "mongoose";
// You MUST include the .js extension here:
import { HoldingsSchema } from "../schemas/HoldingsSchema.js";

const HoldingsModel = model("holding", HoldingsSchema);

export { HoldingsModel };