import { Component, OnInit, OnDestroy } from '@angular/core';
import { weddings } from 'src/app/components/interfaces/weddings.interface';
import { WeddingsService } from 'src/app/services/weddings.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit, OnDestroy {

  goods: weddings[] = []
  goodsObservable: Subscription
  add: number = -1

  constructor(private wd: WeddingsService, private cs:CartService) { }

  ngOnInit() {
    this.goodsObservable = this.wd.getAllWeddings().subscribe(data => {
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
