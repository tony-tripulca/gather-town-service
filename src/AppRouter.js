import express from "express";

import { app } from "./Server.js";

import Controller from "./controllers/Controller.js";
import MapController from "./controllers/MapController.js";

const portal = express.Router();

/**
 * Portal routes
 */
app.use("/portal", portal);
portal.get("/maps", MapController.list);

/**
 * Base routes
 */
app.get("/", Controller.base);
