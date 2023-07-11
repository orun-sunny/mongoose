import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";



const app: Application = express();

//application routes

import userRoutes from "./app/modules/user/user.route"

app.use(cors());

// parse  data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/api/v1/user', userRoutes);

app.use('/api/v1/user', userRoutes)


export default app;