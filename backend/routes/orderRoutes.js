import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleWare.js';
import { addOrderItems, getOrderById } from '../controllers/orderController.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);

export default router;
