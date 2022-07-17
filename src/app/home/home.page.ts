import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

export interface Favorite {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  like = false;

  data: Favorite = {
    position: {
      lat: 1264,
      lng: 9587,
    },
    title: 'Cuenca',
    id: ''
  };

  constructor(private authService: AuthService, private firestoreService: AngularFirestore) { }

  ngOnInit() {
  }

  async addFavorite() {
    this.like = !this.like;
    const uid = await this.authService.getUid();
    const path = 'user/' + uid + '/favorites';
    const id = this.getId();
    this.data.id = id;
    if(this.like) {
      const collection = this.firestoreService.collection(path);
      collection.doc(id).set(this.data);
    } else {
      this.firestoreService.collection(path).doc(id).delete();
    }
  }

  getId() {
    return this.firestoreService.createId();
  }

}
