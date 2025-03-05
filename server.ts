import express from "express";
import type { Request, Response } from "express"; 
import dotenv from "dotenv";
import { collection, connectDB } from "./config/db";


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6000;


// connect to DB
connectDB();

// payload type
interface Payload {
    secretMessage?: string;
    [key: string]: any; 
  }
  
app.post("/webhook", async (req: Request, res: Response): Promise<any> => {
  

    try {
    
        const payload: Payload = req.body;
        await collection.insertOne(payload);
        console.log("received payload:", payload);

        const secretMessage:string = payload.secretMessage || "no secret found";
        return res.json({ message: secretMessage });
    } catch (error) {
        console.error("error saving payload:", error);
        res.status(500).json({ message: "error saving payload" });
    }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
