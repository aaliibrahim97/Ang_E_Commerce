import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class LeatherService {

  constructor(private fs: AngularFirestore, private storage:AngularFireStorage) { }

  getAllLeather () {
    return this.fs.collection('leather').snapshotChanges()
  }
  save(id, price){
    return this.fs.doc(`leather/${id}`).update({price})
  }

  delete(id){
    return this.fs.doc(`leather/${id}`).delete()
  }

  addNewItem (name: String, price: Number, image:File, description:String) {
    return new Promise ((resolve, reject) => {
      let ref = this.storage.ref('leather/' + image.name)
      ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(photoUrl => {
        this.fs.collection('leather').add({
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
