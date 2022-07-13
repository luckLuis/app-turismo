import { Injectable } from '@angular/core';
import { User } from '../model/user'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>
  user: User;
  //suscriberUserInfo: Subscription;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController,
  ) 
  {
    this.user$ = this.afauth.authState
    .pipe(
      switchMap (user => {

        if (user)
        {       
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();  
        } else {
          return of(null);
        }
      })
    )
  } //end constructor

  async signIn(email, password)
  {
    const loading = await this.LoadingCtrl.create({
      message: 'Autenticando...',
      spinner: 'crescent',
      showBackdrop: true,
      
    });

    loading.present();

    this.afauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(()=> {
      this.afauth.signInWithEmailAndPassword(email, password).then((data) =>
      {
        
          loading.dismiss();
          this.router.navigate(['/profile']);
        
      })
      .catch (error => {
        this.toast(error.message, 'danger');
      })
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    });

  } //end of signIn

  async signOut()
  {
    const loading = await this.LoadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true,
    });

    loading.present();

    this.afauth.signOut()
    .then(() => {
      loading.dismiss();
      this.router.navigate(['/login']);
      //this.suscriberUserInfo.unsubscribe();


    })
  } //end of signOut

  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  } //end of toast

  stateUser(){
    return this.afauth.authState;
  }

  getDoc<tipo>(path: string, id: string){
    const collection = this.afs.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }
} 
