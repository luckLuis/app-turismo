import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  name: string;
  phone: string;

  subscription: Subscription;

  uid = '';

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('user id ->', this.uid);
    this.subscription = this.auth.user$.subscribe((user) => {
      this.uid = user.userId;
      this.name = user.userName;
      this.phone = user.userPhone;
      console.log('subscribe');
      console.log('user id ->', this.uid);
    });
  }

  async updateProfile() {
    const loading = await this.loadingCtrl.create({
      message: 'Actualizando...',
      spinner: 'crescent',
      showBackdrop: true,
    });

    loading.present();

    this.afs
      .collection('Users')
      .doc(this.uid)
      .update({
        userName: this.name,
        //'userEmail': this.email,
        //'userRol': this.rol,
        userPhone: this.phone,
        editAt: Date.now(),
      })
      .then(() => {
        loading.dismiss();
        this.toast('Actualización completada!', 'success');
        //this.ngOnDestroy();
        this.router.navigate(['/profile']);
      })
      .catch((error) => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
  }
  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'bottom',
      duration: 2000,
    });
    toast.present();
  } //end toast

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('unsubscribe');
  } //unsubscribe
}
