import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  userId = '';
  name: string;
  //email: string;
  phone: string;
  //rol: string;

  


  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router,
  ) { }

  ngOnInit() 
  {  
    this.auth.user$.subscribe(user => {
      this.userId = this.userId;
      this.name = user.userName;
      //this.rol = user.userRol;
      //this.email = user.userEmail;
      this.phone = user.userPhone;
      console.log('user id ->',this.userId);
    })
  }

  async updateProfile()
  {
    const loading = await this.loadingCtrl.create({
      message: 'Actualizando...',
      spinner: 'crescent',
      showBackdrop: true,
    });

    loading.present();

    this.afs.collection('user').doc(this.userId).set({
      'userName': this.name,
      //'userEmail': this.email,
      //'userRol': this.rol,
      'userPhone': this.phone,
      'editAt': Date.now(),
    }, {merge: true})
    .then(() => {
      loading.dismiss();
      this.toast('Actualización completada!', 'success');
      this.router.navigate(['/profile']);
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    })
  }
  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'bottom',
      duration: 2000,
    });

    toast.present();
  } //end toast

}
