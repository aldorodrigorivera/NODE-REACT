import express, { Request, Response }  from 'express';
import { isAuth } from '../middlewares/auth';
const router = express.Router();


router.get('/', isAuth ,(req: Request, res: Response) => {
  res.send('Hello World');
});

export default router;