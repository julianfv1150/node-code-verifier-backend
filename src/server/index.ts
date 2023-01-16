import express, {Express, Request, Response} from "express";
//Enviroment Variables
import dotenv from 'dotenv';

//Security
import cores from 'cors';
import helmet from 'helmet';

//TODO: HTTPS

//Root Router
import rootRouter from '../routes';

//Configuration the .env
dotenv.config();

//Create Express APP
const server: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
server.use(
    '/api',
    rootRouter
)
