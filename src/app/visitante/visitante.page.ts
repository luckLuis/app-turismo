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


@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.page.html',
  styleUrls: ['./visitante.page.scss'],
})
export class VisitantePage implements OnInit {
  like = false;

  user: any = '';

  places: Place[] = [];

  newPlace: Place;

  enableNewPlace = false;

  newImage = '';
  newFile = '';

  loading: any;

  public route: string;
  constructor(
    public menucontroler: MenuController,
    public firestoreService: FirestoreService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    public firestorageService: FirestorageService,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route = this.activatedRoute.snapshot.paramMap.get('route');
    this.getItems();
  }

  getItems() {
    this.firestoreService.getCollection<Place>(this.route).subscribe((res) => {
      this.places = res;
    });
  }

  async addFavorite(id: string) {
    this.like = !this.like;
    const uid = await this.authService.getUid();
    const path = 'Users/' + uid + '/favorites';
    const idLike = this.firestoreService.getId();
    const data = {
      idPlace: id,
    };

    if (this.like) {
      this.firestoreService.createDoc(data, path, idLike);
    } else {
      this.firestoreService.deleteDoc(path, idLike);
    }
  }

  openMenu() {
    this.menucontroler.toggle('first');
  }
  async saveItem() {
    this.presentLoading();
    const route = this.route;
    const name = this.newPlace.name;
    const res = await this.firestorageService.uploadImage(
      this.newFile,
      route,
      name
    );
    this.newPlace.image = res;
    this.firestoreService
      .createDoc(this.newPlace, this.route, this.newPlace.id)
      .then((res) => {
        this.loading.dismiss();
        this.presentToast('Guardado con ??xito');
        this.enableNewPlace = false;
      })
      .catch((err) => {
        this.presentToast('No se pudo guardar :(');
      });
  }

  newItem() {
    this.enableNewPlace = true;

    this.newPlace = {
      name: '',
      description: '',
      image: '',
      ubication: null,
      id: this.firestoreService.getId(),
      fecha: new Date(),
      manager: null,

      direccion: '',
      paginaWeb: '',
      telefono: '',
      servicios: '',

      mapa: '',
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
}
