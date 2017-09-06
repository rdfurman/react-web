import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('rfurman - Environment');

    meta.addTags([
      { name: 'author', content: 'rfurman' },
      { name: 'keywords', content: 'rfurman, angular, bootstrap, unity, minecraft, overviewer' },
      { name: 'description', content: 'The environment of my hobby home server!' }
    ]);
  }

  ngOnInit() {
  }

}
