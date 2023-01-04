import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//Configuration the .env file
dotenv.config();

//Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//My first Route -> Define the first Route of APP 
app.get('/', (req: Request, res: Response) =>{
    //Send message APP
    res.send('This is my first APP on NODE + EXPRESS + TS + SWAGGER + MONGOOSE');
});


//My second Route -> Define the first Route of APP 
app.get('/hello', (req: Request, res: Response) =>{
    //Send Hellow Word
    res.send('Welcome to GET Route: ¡Hello!');
});


//Execute APP and Listen requests to PORT
app.listen(port, () =>{
    console.log(`EXPRESS SERVER: Running at: http://localhost:${port}`)
});