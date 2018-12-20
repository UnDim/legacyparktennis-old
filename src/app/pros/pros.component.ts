import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database'; 

@Component({
  selector: 'pros',
  templateUrl: './pros.component.html',
  styleUrls: ['./pros.component.css']
})
export class ProsComponent implements OnInit {

  prosObservable:  Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.prosObservable = this.getEvents('/pros');
  }
  getEvents(listPath) {
    return this.db.list(listPath).valueChanges();
  }  
}
