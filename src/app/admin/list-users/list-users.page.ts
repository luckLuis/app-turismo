import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {
  rol: string;

  listUsers = [];

  listRols = ['admin', 'encargado', 'turista'];

  constructor(
    private database: DatabaseService,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {
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
  async editar(id) {
    console.log(this.rol);
    this.afs.collection('Users').doc(id).update({
      userRol: this.rol,
    });
    console.log(this.rol);
  } //end toast
  eliminar(id) {
    this.database.delete('Users', id);
  }
}
