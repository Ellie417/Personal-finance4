import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import transactionsRouter from './routes/transactions.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true, service: 'backend' }));
app.use('/api/transactions', transactionsRouter);

const PORT = process.env.PORT || 4000;
connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`API running on :${PORT}`));
});



