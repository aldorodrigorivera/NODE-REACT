import express, { Request, Response }  from 'express';
import { calculateFibonacci } from '../controllers/api';
import { isAuth } from '../middlewares/auth';
const router = express.Router();

router.get('/fibonacci/:num', isAuth ,(req: Request, res: Response) => {
    try {
        const num = +req.params.num;
        const result = calculateFibonacci(num);
        res.status(200).send({
            ok: true, 
            result, 
        });
    } catch (err) {
        res.status(400).send({
            ok: false, 
            err, 
            message:'Verify your param is a number'
        });
    }
    
});

export default router;