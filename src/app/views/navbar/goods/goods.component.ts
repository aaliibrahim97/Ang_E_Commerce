import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { WeddingsService } from 'src/app/services/weddings.service';
import { weddings } from 'src/app/components/interfaces/weddings.interface';

import { LeatherService } from 'src/app/services/leather.service';
import { leather } from 'src/app/components/interfaces/leather.interface';

import { AccessoriesService } from 'src/app/services/accessories.service';
import { accessories } from 'src/app/components/interfaces/accessories.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @ViewChild('weddingimage', {static: false}) weddingImage: ElementRef

  @ViewChild('leatherimage', {static: false}) leatherImage: ElementRef

  @ViewChild('accessimage', {static: false}) accessoriesImage: ElementRef

  wGoods: weddings[] = []
  wGoodsObservable: Subscription

  lGoods: leather[] = []
  lGoodsObservable: Subscription

  aGoods: accessories[] = []
  aGoodsObservable: Subscription

  constructor(private weddings:WeddingsService, private leather:LeatherService,
    private access:AccessoriesService,) { }

      //ADD WEDDING ITEM
      addWeddingItem(form) {
        let name = (<weddings>form.value).name,
            price = (<weddings>form.value).price,
            description = (<weddings>form.value).description,
            wImage = (<HTMLInputElement>this.weddingImage.nativeElement).files[0];
            this.weddings.addNewItem(name,price,wImage,description)
            .then(msg => alert(msg))
          }
      //ADD LEATHER ITEM
      addLeatherItem(form) {
        let name = (<leather>form.value).name,
            price = (<leather>form.value).price,
            description = (<leather>form.value).description,
            image = (<HTMLInputElement>this.leatherImage.nativeElement).files[0];
            this.leather.addNewItem(name,price,image,description)
            .then(msg => alert(msg))
          }
        //ADD ACCESS ITEM
        addAccessItem(form) {
           let name = (<accessories>form.value).name,
              price = (<accessories>form.value).price,
              description = (<accessories>form.value).description,
              image = (<HTMLInputElement>this.accessoriesImage.nativeElement).files[0];
              this.access.addNewItem(name,price,image,description)
              .then(msg => alert(msg))
          }

        ngOnInit() {

          //GET WEDDING ITEM
            this.wGoodsObservable =  this.weddings.getAllWeddings().subscribe(data => {
              this.wGoods = data.map(element => {
                return {
                  id: element.payload.doc.id,
                  ...element.payload.doc.data() as {}
                }
              })
            })

          //GET LEATHER ITEM
            this.lGoodsObservable = this.leather.getAllLeather().subscribe(data => {
              this.lGoods = data.map(element => {
                return {
                  id: element.payload.doc.id,
                  ...element.payload.doc.data() as {}
                }
              })
            })

            //GET ACCESS ITEM
            this.aGoodsObservable = this.access.getAllAccessories().subscribe(data => {
              this.aGoods = data.map(element => {
                return {
                  id: element.payload.doc.id,
                  ...element.payload.doc.data() as {}
                }
              })
            })

        }
        //SAVE WEDDING ITEM
         gSave (index) {
                 this.weddings.save(this.wGoods[index].id, this.wGoods[index].price)
                 alert("New item's price has been put")
          }
        //DELETE WEDDING ITEM
         gDelete(index) {
                 this.weddings.delete(this.wGoods[index].id)
                 alert("Item deleted from the wedding")
          }

          //SAVE LEATHER ITEM
          lSave (index) {
            this.leather.save(this.lGoods[index].id, this.lGoods[index].price)
            alert("New item's price has been put")
          }
          //DELETE LEATHER ITEM
          lDelete(index) {
            this.leather.delete(this.lGoods[index].id)
            alert("Item deleted from the wedding")
          }

          //SAVE LEATHER ITEM
          aSave (index) {
            this.access.save(this.aGoods[index].id, this.aGoods[index].price)
            alert("New item's price has been put")
          }
          //DELETE LEATHER ITEM
          aDelete(index) {
            this.access.delete(this.aGoods[index].id)
            alert("Item deleted from the wedding")
          }
}
