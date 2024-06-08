import { Router } from "express";  // gerenciador de rotas do express
import { getPlayer, getPlayerById, postPlayer, deletePlayer, updatePlayer } from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router();

router.get("/players", getPlayer);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);
router.get("/players/:id", getPlayerById);

router.get("/clubs", getClubs)

export default router;