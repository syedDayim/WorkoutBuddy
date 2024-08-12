import express from 'express';
import dotenv from 'dotenv';
import router from "./router/web.js";
import { connectDB } from './db/connection.js';
import cors from "cors";


dotenv.config();

const app = express();
const port = process.env.PORT;
const db_url = process.env.DATABASE_URL;

app.use(cors({ origin: 'http://localhost:5173' }));

// Connection to database:
connectDB(db_url);

// Middleware
app.use(express.json());


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Root Routes
app.use('/api/workouts', router)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})