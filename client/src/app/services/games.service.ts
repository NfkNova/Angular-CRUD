import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Game} from '../models/Game';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getGames() {
    return this.http.get(`${this.API}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API}/games/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API}/games`,game);
  }

  updateGame(id: string, UpGame: Game){
    return this.http.put(`${this.API}/games/${id}`, UpGame);
  }


}

