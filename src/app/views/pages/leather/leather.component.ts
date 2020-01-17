import { Component, OnInit, OnDestroy } from '@angular/core';
import { leather } from 'src/app/components/interfaces/leather.interface';
import { LeatherService } from 'src/app/services/leather.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-leather',
  templateUrl: './leather.component.html',
  styleUrls: ['./leather.component.scss']
})
export class LeatherComponent implements OnInit, OnDestroy {

  goods: leather[] = []
  goodsObservable: Subscription
  add: number = -1

  constructor(private wd: LeatherService, private cs:CartService) { }

  ngOnInit() {
    this.goodsObservable = this.wd.getAllLeather().subscribe(data => {
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
