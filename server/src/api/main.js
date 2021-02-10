//repo routes
import express from 'express';

import { createRepo, getRepos, updateProduct} from "./controllers";

const router = express.Router();
router.post("/repo", createRepo);
router.get("/repo", getRepos);
router.put("/repo/:id", updateProduct);

export default router;
