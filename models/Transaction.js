import mongoose from "mongoose";

const txnSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["income", "expense"], required: true },
    amount: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    note: { type: String },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", txnSchema);


