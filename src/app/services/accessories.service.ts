import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor(private fs: AngularFirestore, private storage:AngularFireStorage) { }

  getAllAccessories () {
    return this.fs.collection('access').snapshotChanges()
  }

  save(id, price){
    return this.fs.doc(`access/${id}`).update({price})
  }

  delete(id){
    return this.fs.doc(`access/${id}`).delete()
  }

  addNewItem (name: String, price: Number, image:File, description:String) {
    return new Promise ((resolve, reject) => {
      let ref = this.storage.ref('access/' + image.name)
      ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(photoUrl => {
        this.fs.collection('access').add({
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
