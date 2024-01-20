import express from "express";
import { h1,h2 } from "../controllers/index.js";
const app = express()
export const router = express.Router()
router.get("/hello", h1)
router.get("/sk", h2)
