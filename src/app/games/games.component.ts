import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('rfurman - Games');
    
        meta.addTags([
          { name: 'author', content: 'rfurman' },
          { name: 'keywords', content: 'rfurman, unity, demon shanker 2, demon, shanker' },
          { name: 'description', content: 'Some side project games I\'ve developed!' }
        ]);
   }

  ngOnInit() {
    var gameInstance = UnityLoader.instantiate("gameContainer", "assets/demonshanker2/Build/Builds.json", {
      onProgress: UnityProgress
    });
  }

}
