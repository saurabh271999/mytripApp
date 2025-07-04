import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import otpRoutes from './routes/otp.route.js'
import userProfileRoutes from './routes/userprofile.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/userprofile', userProfileRoutes);

// MongoDB Connection and Server Start
mongoose.connect(process.env.MONGO_URI, {
  
}).then(() => {
  console.log('MongoDB Connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));