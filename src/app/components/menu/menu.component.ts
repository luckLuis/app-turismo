import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  isLogin: boolean = false;

  userRol: 'admin' | 'turista' | 'encargado' = null;
  
  user: User = {
    userId: '',
    userName: '',
    userEmail: '',
    userPhone: '',
    userRol: null,
    createdAt: null,
  }

  uid = '';

  constructor(private auth: AuthService,
              private router: Router,) 
  {
    this.auth.stateUser().subscribe( res => {
      if (res)
      {
        console.log('está logueado');
        //console.log(this.user);
        
        this.getDatosUser(res.uid);
        this.isLogin = true;
      } else {
        console.log('no está logueado')
        //console.log(this.user);
        this.initCliente();
        this.isLogin = false;
      }
    })

  }
          

  ngOnInit()  { }


  initCliente(){
    this.uid = '';
    this.user = {
      userId: '',
      userName: '',
      userEmail: '',
      userPhone: '',
      userRol: null,
      createdAt: null,
    };
    console.log(this.user);
  }

  profile()
  {
    this.router.navigate(['/profile']);
  }

  logout(){
    this.auth.signOut();
    this.router.navigate(["/login"]);
  }

  getDatosUser(userId: string)
  {
    const path = 'user';
    const id = userId;
    this.auth.getDoc<User>(path, id).subscribe(user =>{
      //console.log('datos ->', user);
      this.user = user;
      if (user){
        this.userRol = user.userRol;
        //console.log(this.userRol)
      }
    })
  }

}
