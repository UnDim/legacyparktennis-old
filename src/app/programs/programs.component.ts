import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


@Component({
  selector: 'programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  programsObservable:  Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.programsObservable = this.getPrograms('/programs');
  }
  getPrograms(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}

