import {Request, Response, NextFunction} from 'express';

export const isAuth = (req: Request, __: Response, next: NextFunction) => {
    const path = req.path;
    console.log(`Path:: ${path}`);
    next();
 }   
 