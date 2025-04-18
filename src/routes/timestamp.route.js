import { Router } from "express";
import timestampConverterController from "../controllers/timestamp.controller.js";

const timestampRoute = Router();

timestampRoute.get("/:date", (req, res) => {
    const timestamp = timestampConverterController(req.params.date);
    res.json(timestamp);
});

timestampRoute.get("/", (req, res) => {
    const timestamp = timestampConverterController();
    res.json(timestamp);
});


export default timestampRoute;