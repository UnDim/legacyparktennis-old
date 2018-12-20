import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  eventsObservable:  Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.eventsObservable = this.getEvents('/events');
  }
  getEvents(listPath) {
    return this.db.list(listPath).valueChanges();
  }  
}