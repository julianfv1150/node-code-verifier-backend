/**
 * Root router
 * Redirectoins to Routers
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "@/utils/logger";

//Server instance
let server = express();

//Router instance
let rootRouter = express.Router();

//activate for request to http:localhost:8000/api

rootRouter.get('/', (req: Request, res: Response)=>{
    LogInfo('GET: http:localhost:8000/api')
    //Send Hello World
    res.send('Welcome in the rootRouter');
});

//Redirections to Routers & Controllers
server.use('/', rootRouter); //http:localhost:8000/api
server.use('/', helloRouter); //http:localhost:8000/api/hello

//add more routes to the app

export default server;
