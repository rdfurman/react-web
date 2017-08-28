import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { GamesComponent } from './games/games.component';
import { EnvironmentComponent } from './environment/environment.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'minecraft', component: MinecraftComponent },
  { path: 'environment', component: EnvironmentComponent },
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
    GamesComponent,
    MinecraftComponent,
    EnvironmentComponent
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
