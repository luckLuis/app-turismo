import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Place } from '../model/places';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favorites: Place[] = [];

  hotels:Place[] = [];

  restaurants:Place[] = [];

  libraries:Place[] = [];

  museums:Place[] = [];

  private path = 'Hoteles/';

  private pathM = 'Museos/';

  private pathL = 'Bibliotecas/';

  private pathR = 'Restaurantes/';

  constructor(
    private authService: AuthService,
    private firestoreService: AngularFirestore,
    private firestoreServices: FirestoreService
  ) {}

  ngOnInit() {
    this.loadFavorites();

    this.getHotels();
    this.getLibrary();
    this.getMuseum();
    this.getRestaurant();
  }

  async loadFavorites() {
    
    const uid = await this.authService.getUid();
    const path = 'Users/' + uid + '/favorites';
   
    const collection = this.firestoreService
      .collection<Place>(path)
      .valueChanges();
    collection.subscribe((res) => {
      this.favorites = res;
    });

    console.log("uid", uid);
  }

  getHotels() {
    this.firestoreServices
      .getCollection<Place>(this.path)
      .subscribe((res) => {
        this.hotels = res;
      });
  }

  getRestaurant() {
    this.firestoreServices
      .getCollection<Place>(this.pathR)
      .subscribe((res) => {
        this.restaurants = res;
      });
  }

  getLibrary() {
    this.firestoreServices
      .getCollection<Place>(this.pathL)
      .subscribe((res) => {
        this.libraries = res;
      });
  }

  getMuseum() {
    this.firestoreServices
      .getCollection<Place>(this.pathM)
      .subscribe((res) => {
        this.museums = res;
      });
  }

  

}
