import express from "express";
import { getdata } from "../controllers/GetDataTunisiaNet.js";
const router = express.Router();
router.post('/data',getdata);
export default router;