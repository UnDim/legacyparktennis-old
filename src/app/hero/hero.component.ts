import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // imagesObservable:  Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  //images = [1, 2, 3].map(() => this.getImages('/hero-images'));
  // images = [1, 2, 3].map(() => `https://picsum.photos/1400/500?random&t=${Math.random()}`)
  images = ["../assets/img/hero/hero1.jpeg","../assets/img/hero/hero2.jpeg","../assets/img/hero/hero3.jpeg"];

  ngOnInit() {
    //this.imagesObservable = this.getImages('/hero-images');
  }
  // getImages(listPath) {
  //   return this.db.list(listPath).valueChanges();
  // } 
}
