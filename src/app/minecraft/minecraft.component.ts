import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('rfurman - Games');

    meta.addTags([
      { name: 'author', content: 'rfurman' },
      { name: 'keywords', content: 'rfurman, minecraft, overviewer, map' },
      { name: 'description', content: 'A map of our Minecraft server rendered by Overview!' }
    ]);
  }

  ngOnInit() {
  }

}
