import express, { Request, Response, json } from "express";     // Escrever em maiuscula Request e Response
import router from "./routes";
import cors from "cors";


function createApp() {
    const app = express();
    
    app.use(json());
    app.use("/api", router);

    const corsOptions = {
        origin: ["http://google.com", "http://localhost:3000"],
        methods: ["GET"],
    };

    app.use(cors(corsOptions))

    return app;
}

export default createApp;