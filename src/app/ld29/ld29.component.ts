import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ld29',
  templateUrl: './ld29.component.html',
  styleUrls: ['./ld29.component.css']
})
export class GamesComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('rfurman - LD29');
    
        meta.addTags([
          { name: 'author', content: 'rfurman' },
          { name: 'keywords', content: 'rfurman, unity, demon shanker 2, demon shanker, ludum dare, ludum' },
          { name: 'description', content: 'My teams entry for Ludum Dare 29.' }
        ]);
   }

  ngOnInit() {
    var gameInstance = UnityLoader.instantiate("gameContainer", "assets/demonshanker2/Build/Builds.json", {
      onProgress: UnityProgress
    });
  }

}
