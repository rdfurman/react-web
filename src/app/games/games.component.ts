import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var gameInstance = UnityLoader.instantiate("gameContainer", "assets/demonshanker2/Build/Builds.json", {
      onProgress: UnityProgress
    });
  }

}
