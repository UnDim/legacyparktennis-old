import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database'; 

@Component({
  selector: 'sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  levelsObservable:  Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.levelsObservable = this.getSponsors('/sponsorship');
  }
  getSponsors(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}