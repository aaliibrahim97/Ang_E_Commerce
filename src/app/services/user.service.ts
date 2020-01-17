import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore, private as: AuthService) { }

 getUserInfo(){
    return this.fs.doc(`users/${this.as.userId}`).snapshotChanges()
  }

  addNewUser(id,firstName,lastName,phoneNumber) {
    return this.fs.doc('users/'+ id).set({
      firstName,
      lastName,
      phoneNumber
    })
  }
}
