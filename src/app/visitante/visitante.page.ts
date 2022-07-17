import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { GooglemapsComponent } from 'src/app/googlemaps/googlemaps.component';
import { Place } from '../model/places';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export interface Favorite {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  id: string;
}

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.page.html',
  styleUrls: ['./visitante.page.scss'],
})
export class VisitantePage implements OnInit {
  like = false;

  data: Favorite = {
    position: {
      lat: 1264,
      lng: 9587,
    },
    title: 'Cuenca',
    id: '',
  };

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit() {}

  async addFavorite() {
    this.like = !this.like;
    const uid = await this.authService.getUid();
    const path = 'Users/' + uid + '/favorites';
    const id = this.firestoreService.getId();
    this.data.id = id;
    if (this.like) {
      this.firestoreService.createDoc(this.data, path, id);
    } else {
      this.firestoreService.deleteDoc(path, id);
    }
  }

  /*
  user: any = '';

  places: Place[] = [];

  newPlace: Place;

  enableNewPlace = false;

  newImage = '';
  newFile = '';

  loading: any;
  public path: string;

  constructor(
    public menucontroler: MenuController,
    public firestoreService: FirestoreService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    public firestorageService: FirestorageService,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.path = this.activatedRoute.snapshot.paramMap.get('route');
    this.getItems();
    this.auth.user$.subscribe((user) => {
      this.user = user;
    });
    console.log('path', this.path);
  }
  openMenu() {
    this.menucontroler.toggle('first');
  }
  async saveItem() {
    this.presentLoading();
    const path = this.path;
    const name = this.newPlace.name;
    const res = await this.firestorageService.uploadImage(
      this.newFile,
      path,
      name
    );
    this.newPlace.image = res;
    this.firestoreService
      .createDoc(this.newPlace, this.path, this.newPlace.id)
      .then((res) => {
        this.loading.dismiss();
        this.presentToast('Guardado con éxito');
        this.enableNewPlace = false;
      })
      .catch((err) => {
        this.presentToast('No se pudo guardar :(');
      });
  }

  getItems() {
    this.firestoreService.getCollection<Place>(this.path).subscribe((res) => {
      this.places = res;
    });
  }

  newItem() {
    this.enableNewPlace = true;

    this.newPlace = {
      name: '',
      price: null,
      description: '',
      image: '',
      ubication: null,
      id: this.firestoreService.getId(),
      fecha: new Date(),
      manager: null,
    };
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'normal',
      message: 'Guardando...',
    });
    await this.loading.present();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'normal',
      color: 'Light',
    });
    toast.present();
  }

  async newImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (image) => {
        this.newPlace.image = image.target.result as string;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  async addDirection() {
    const location = this.newPlace.ubication;
    let positionInput = {
      lat: 0,
      lng: 0,
    };
    if (location !== null) {
      positionInput = location;
    }

    const modalAdd = await this.modalController.create({
      component: GooglemapsComponent,
      componentProps: { position: positionInput },
    });
    await modalAdd.present();

    const { data } = await modalAdd.onWillDismiss();
    if (data) {
      console.log('data -> ', data);
      this.newPlace.ubication = data.pos;
      console.log('this.newPlace -> ', this.newPlace);
    }
  }
  */
}
