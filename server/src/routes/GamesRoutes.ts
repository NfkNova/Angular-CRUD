import { Router } from "express";
import gamescontroller from '../controllers/GamesControllers';


class GamesRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', gamescontroller.List );
        this.router.post('/', gamescontroller.Create);
        this.router.delete('/:id', gamescontroller.Delete);
        this.router.put('/:id', gamescontroller.Update);
        this.router.get('/:id', gamescontroller.getOne );
    }
}
const gamesroutes = new GamesRoutes();
export default gamesroutes.router;