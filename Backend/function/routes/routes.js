import express from 'express'
import { getMuvieById } from '../ctrls/ctrls.js';






const router = express.Router();

router.get("/movie",getMuvieById)

export default router