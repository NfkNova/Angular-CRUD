import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
    public async List (req: Request , res: Response) {
        const games = await pool.query('SELECT * FROM games');
        res.json(games); 
    }
    
    public Create(req: Request, res: Response){
        pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Game saved'});
    }   

    public async Delete(req: Request, res: Response){
        const { id } = req.params;
        const games = await pool.query('DELETE FROM games WHERE id = ?',[id]);
        res.json({message: 'The game is deleted'}); 
    }

    public async Update(req: Request, res: Response){
        const { id } = req.params;
        const games = await pool.query('UPDATE games set ? WHERE id = ?',[req.body,id]);
        res.json({message: 'The was updated'}); 
    }
    public async getOne(req: Request, res: Response){
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?',[id]);
        res.json(games); 
    }
}

const gamescontroller = new GamesController();
export default gamescontroller;