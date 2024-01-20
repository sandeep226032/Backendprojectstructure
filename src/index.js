import express from "express";
import { PORT } from "./config/index.js";
import { router } from "./routes/index.js";
const app = express()
app.get("/", (req, res) => {
    res.send("hello world")
})
app.use("/home",router)
app.listen(PORT, () => {
    console.log("server is running on port", PORT);
})
