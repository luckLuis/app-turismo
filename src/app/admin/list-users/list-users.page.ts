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

  eliminar(id) {
    this.database.delete('Users', id);
  }

  editar(id) {
    this.afs
      .collection('Users')
      .doc(id)
      .update({
        userRol: this.rol,
        editAt: Date.now(),
      })
      .then(() => {
        console.log('Rol nuevo -> ', this.rol);
      })
      .catch((error) => {});
  }

  recoverAlertValue(event) {
    return (this.rol = event.detail.value);
  }
}
