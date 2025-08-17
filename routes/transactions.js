import express from "express";
import Transaction from "../models/Transaction.js";
const r = express.Router();

// CREATE
r.post("/", async (req,res)=>{
  try { const t = await Transaction.create(req.body); res.status(201).json(t); }
  catch(e){ res.status(400).json({error:e.message}); }
});

// READ (list + filters)
r.get("/", async (req,res)=>{
  const {type, category} = req.query;
  const q = {};
  if(type) q.type = type;
  if(category) q.category = category;
  const items = await Transaction.find(q).sort({date:-1});
  res.json(items);
});

// READ (single)
r.get("/:id", async (req,res)=>{
  const t = await Transaction.findById(req.params.id);
  if(!t) return res.status(404).json({error:"Not found"});
  res.json(t);
});

// UPDATE
r.put("/:id", async (req,res)=>{
  const t = await Transaction.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
  if(!t) return res.status(404).json({error:"Not found"});
  res.json(t);
});

// DELETE
r.delete("/:id", async (req,res)=>{
  const t = await Transaction.findByIdAndDelete(req.params.id);
  if(!t) return res.status(404).json({error:"Not found"});
  res.json({ok:true});
});

export default r;
