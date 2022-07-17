import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { Place } from 'src/app/model/places';
import { DatabaseService } from 'src/app/services/database.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.page.html',
  styleUrls: ['./list-places.page.scss'],
})
export class ListPlacesPage implements OnInit {
  isModalOpen = false;

  isthePlace = '';

  setOpen(isOpen: boolean, id: string) {
    this.isModalOpen = isOpen;
    this.isthePlace = id;
  }

  places: Place[] = [];

  newPlace: Place;

  enableNewRestaurant = false;
  listUsers = [];

  public path: string;
  newImage = '';
  newFile = '';

  loading: any;
  constructor(
    public menucontroler: MenuController,
    public firestoreService: FirestoreService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    public firestorageService: FirestorageService,
    public modalController: ModalController,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private database: DatabaseService
  ) {}

  ngOnInit() {
    this.path = this.activatedRoute.snapshot.paramMap.get('route');
    this.getItems();
    this.getManage();
    console.log('path', this.path);
  }
  getManage() {
    this.database.getAll('Users').then((firebaseResponse) => {
      firebaseResponse.subscribe((listOfUsers) => {
        listOfUsers.forEach((user) => {
          this.listUsers = listOfUsers.map((user) => {
            let usuario = user.payload.doc.data();
            usuario['id'] = user.payload.doc.id;
            return usuario;
          });
        });
      });
    });
  }

  updateManager(name: string): void {
    const data = {
      manager: name,
    };

    this.firestoreService
      .updateDoc(data, this.path, this.isthePlace)
      .catch((err) => console.log(err));

    this.isModalOpen = false;
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
  async deleteItem(place: Place) {
    const alert = await this.alertController.create({
      cssClass: 'normal',
      header: 'Advertencia',
      message: 'Seguro desea <strong>eliminar<strong>!',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'normal',
          handler: (blah) => {
            console.log('Confirmar cancelar');
          },
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Confirmar OK');
            this.firestoreService
              .deleteDoc(this.path, place.id)
              .then((res) => {
                this.loading.dismiss();
                this.presentToast('Eliminado con éxito');
              })
              .catch((err) => {
                this.presentToast('No se pudo eliminar :(');
              });
          },
        },
      ],
    });

    await alert.present();
    //
  }

  newItem() {
    this.enableNewRestaurant = true;
    this.router.navigate(['/create/place', this.path]);
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



}
