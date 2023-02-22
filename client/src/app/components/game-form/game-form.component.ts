import { Router, ActivatedRoute } from '@angular/router';
import { GamesService } from './../../services/games.service';
import { Game } from './../../models/Game';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding ('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    create_at: new Date()
  };
    constructor(private activeroter: ActivatedRoute, private gameservice: GamesService, private router: Router) { }

  ngOnInit(): void {
    const params = this.activeroter.snapshot.params;
    if (params["id"]){
      this.gameservice.getGame(params["id"])
      .subscribe(
        {
          next: res => {
            console.log();
            this.game = res;
        },
        error: err => {
          console.log(err)
        }
        });
      }
    }

  saveNewGame(){
    delete this.game.create_at;
    delete this.game.id;
    this.gameservice.saveGame(this.game).subscribe(
      {
        next: res => {
          console.log(res);
          this.router.navigate(['/games']);
      },
      error: err => {
        console.log(err)
      }
      });
  }

}
