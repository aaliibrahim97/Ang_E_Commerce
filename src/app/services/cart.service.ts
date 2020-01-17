import { Injectable } from '@angular/core';
import { weddings } from '../components/interfaces/weddings.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs:AngularFirestore, private as: AuthService) { }

  addToCart(data: weddings){
    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }
  getCartItems(){
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
  }
  save(id, amount){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({amount})
  }
  delete(id){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }

}
