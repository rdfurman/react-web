import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { LD29Component } from './ld29/ld29.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: LD29Component },
  { path: 'minecraft', component: MinecraftComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LD29Component,
    MinecraftComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
