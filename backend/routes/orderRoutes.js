import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleWare.js';
import { addOrderItems } from '../controllers/orderController.js';

router.route('/').post(protect, addOrderItems);

export default router;
