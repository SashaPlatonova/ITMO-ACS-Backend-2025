import { Router } from "express";
import { AuthController  } from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

export default router;