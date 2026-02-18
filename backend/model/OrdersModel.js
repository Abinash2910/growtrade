// const { model } = require("mongoose");

// const { OrdersSchema } = require("../schemas/OrdersSchema");

// const OrdersModel = new model("order", OrdersSchema);

// module.exports = { OrdersModel };







import { model } from "mongoose";
// IMPORTANT: You MUST include the .js extension here:
import { OrdersSchema } from "../schemas/OrdersSchema.js";

const OrdersModel = model("order", OrdersSchema);

export { OrdersModel };