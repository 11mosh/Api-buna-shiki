import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import admEndpoints from './controller/admController.js';
import clienteEndpoints from './controller/clienteController.js';

const server = express()

server.use(cors())
server.use(express.json())
server.use(admEndpoints)
server.use(clienteEndpoints) 

server.listen(process.env.PORT, 
    () => console.log('API online na porta ' + process.env.PORT)); 