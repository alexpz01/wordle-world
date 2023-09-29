import { Component} from '@angular/core';
import { WordleService } from '@public/services/wordle.service';
import {ActivatedRoute} from '@angular/router'
import { DifficultyService } from '@public/services/difficulty';

// This component creates a wordle with random mode.
@Component({
  selector: 'app-random-wordle',
  templateUrl: './random-wordle.component.html',
  providers : [WordleService]
})
export class RandomWordleComponent {

  public difficulty : string = ''
  public difficultyService : DifficultyService

  
  // In this case the wordle is initialized from the DifficultyService class, since it is a wordle with several difficulties
  constructor(
    public _route: ActivatedRoute,
    public wordle: WordleService
  ) {
    this.difficultyService = new DifficultyService(this.wordle, this._route)
    this.difficultyService.init("RANDOM")
  }

}
