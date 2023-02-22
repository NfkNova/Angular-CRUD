import { Component, HostBinding, OnInit } from '@angular/core';
import {GamesService} from '../../services/games.service';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  games: any= [];

  constructor(private gameservice: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
    this.gameservice.getGames().subscribe(
      {
        next: res => {
          this.games = res;
      },
      error: err => {
        console.log(err)
      }
      });
  }
  deletedGame(id: string){
    this.gameservice.deleteGame(id).subscribe(
      {
        next: res => {
          console.log(res);
          this.getGames();
      },
      error: err => {
        console.log(err)
      }
      });
  }

}
