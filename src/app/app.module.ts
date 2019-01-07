import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Website Modules
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProsComponent } from './pros/pros.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { FooterComponent } from './footer/footer.component';

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
    SponsorComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
