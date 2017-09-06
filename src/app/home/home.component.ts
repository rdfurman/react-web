import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('rfurman - Home');

    meta.addTags([
      { name: 'author', content: 'rfurman' },
      { name: 'keywords', content: 'rfurman, angular, bootstrap, unity, minecraft, overviewer' },
      { name: 'description', content: 'A generic Angular App for me to place side project in!' }
    ]);
  }

  ngOnInit() {
  }

}
