import { Component, OnInit, OnDestroy } from '@angular/core';
import { accessories } from 'src/app/components/interfaces/accessories.interface';
import { AccessoriesService } from 'src/app/services/accessories.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit, OnDestroy {

  goods: accessories[] = []
  goodsObservable: Subscription
  add: number = -1

  constructor(private wd: AccessoriesService, private cs:CartService) { }

  ngOnInit() {
    this.goodsObservable = this.wd.getAllAccessories().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as {}
        }
      })
    })
  }

  ngOnDestroy() {
    this.goodsObservable.unsubscribe()
  }

  addToCart(index: number){
    this.add = +index
  }

  buy(amount: number){
    let selectedItem = this.goods[this.add]
    let data = {
      name: selectedItem.name,
      amount: +amount,
      price: selectedItem.price,
    }
    this.cs.addToCart(data)
    .then(()=> this.add = -1)
    .then(()=> alert("item added to your cart"))
  }
}
