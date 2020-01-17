import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class WeddingsService {

  constructor(private fs: AngularFirestore, private storage:AngularFireStorage) { }

  getAllWeddings () {
    return this.fs.collection('weddings').snapshotChanges()
  }

  save(id, price){
    return this.fs.doc(`weddings/${id}`).update({price})
  }

  delete(id){
    return this.fs.doc(`weddings/${id}`).delete()
  }

  addNewItem (name: String, price: Number, image:File, description: String) {
    return new Promise ((resolve, reject) => {
      let ref = this.storage.ref('weddings/' + image.name)
      ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(photoUrl => {
        this.fs.collection('weddings').add({
          name,
          price,
          photoUrl,
          description
          }).then(()=> resolve('Item Added Successfully!'))
        })
      })
    })
  }
}
