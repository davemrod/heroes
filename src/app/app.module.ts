import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { FandomModule } from './fandom/fandom.module';
import { MundoComponent } from './mundo/mundo.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { DomseguroPipe } from './domseguro.pipe';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   //HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    MundoComponent,
    MostrarComponent,
    DomseguroPipe,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FandomModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
