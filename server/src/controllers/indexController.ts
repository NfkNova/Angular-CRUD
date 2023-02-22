import {Request, Response} from 'express';

class IndexController{
    public index (req: Request , res: Response) {
        res.json('API Is /api/games')
    } 
}

export const indexcontrollers = new IndexController();