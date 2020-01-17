import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from 'src/app/components/interfaces/shopping.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  cart: Shopping [] = []

  constructor(private cs:CartService) { }

  ngOnInit() {
    this.cs.getCartItems().subscribe(cart => {
      this.cart = cart.map(shopping => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data() as {}
        }
      })
    })
  }

  save (index) {
    this.cs.save(this.cart[index].id, this.cart[index].amount)
    alert("New item's amount saved in your cart")
  }

  delete(index){
    this.cs.delete(this.cart[index].id)
    alert("Item deleted from your cart")
  }

}
