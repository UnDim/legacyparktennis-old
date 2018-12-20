import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProsComponent } from './pros/pros.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HeroComponent,
    NavbarComponent,
    ProgramsComponent,
    ProsComponent,
    SponsorComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
