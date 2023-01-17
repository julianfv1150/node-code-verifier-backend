import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';

//Configuration the .env file
dotenv.config();

//Create variable PORT
const port: string | number = process.env.PORT || 8000;

//Execute server and Listen requests to PORT
server.listen(port, () =>{
    LogSuccess(`[SERVER: ON] -> Running in http://localhost:${port}/api`);
});

//Control SERVER ERROR
server.on('error', (error: any) =>{
    LogError(`[SERVER ERROR]: ${error}`);
})