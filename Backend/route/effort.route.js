import express from "express";
import { getEffort } from "../controller/effort.controller.js";

const router=express.Router()

router.get("/", getEffort);

export default router;