import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";


dotenv.config();

const serv = express();

serv.use(express.json());
serv.use(cors());

serv.listen(process.env.PORT,() =>console.log("Server Runnig On Port : " + process.env.PORT));

db.dbConnection();