import express from "express";
import type { Request, Response } from "express";
import fs from "fs/promises"; 
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6000;

let payload: any = null;

app.post("/", async (req: Request, res: Response): Promise<any> => {
  

    payload = req.body;
    console.log("received payload:", payload);

    try {
        await fs.writeFile("payload.json", JSON.stringify(payload, null, 2));
    } catch (error) {
        console.error("Error saving payload:", error);
        return res.status(500).json({ message: "error saving payload" });
    }

    const secretMessage = payload.secretMessage || "no secret found";

    return res.json({ message: secretMessage });
});

app.listen(PORT, () => console.log(`webhook listening on port ${PORT}`));
