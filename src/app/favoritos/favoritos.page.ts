import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Favorite } from '../home/home.page';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favorites: Favorite[] = [];

  constructor(private authService: AuthService, private firestoreService: AngularFirestore) { }

  ngOnInit() {
    this.loadFavorites();
  }

  async loadFavorites() {
    const uid = await this.authService.getUid();
    const path = 'user/' + uid + '/favorites';
    const collection = this.firestoreService.collection<Favorite>(path).valueChanges();
    collection.subscribe( res => {
      this.favorites = res;
    });
  }

}
