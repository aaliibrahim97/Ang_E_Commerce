import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //overlay 1
    let OverLay = document.getElementById("overLay")
    let OverLayText1 = document.getElementById("overLayText1")
    let OverLayText2 = document.getElementById("overLayText2")
    let OverLayText3 = document.getElementById("overLayText3")
    let OverLayButton = document.getElementById("overLayButton")

    OverLay.onmouseover = ()=> {
      OverLay.classList.add("rgba-teal-strong","overlay-display","animated","fadeInLeftBig")
      OverLayText1.textContent="NEW"
      OverLayText2.textContent="FALL"
      OverLayText3.textContent="STOCK"
      OverLayButton.textContent="Check It Out"
    }

    //overlay 2
    let OverLay2 = document.getElementById("overLay2")
    let OverLay2Text1 = document.getElementById("overLay2Text1")
    let OverLay2Text2 = document.getElementById("overLay2Text2")
    let OverLay2Text3 = document.getElementById("overLay2Text3")

    let OverLay2Button = document.getElementById("overLay2Button")

    let SpecialsHeader = document.getElementById("specialsHeader")
    let Specials1 = document.getElementById("specials1")
    let Specials2 = document.getElementById("specials2")
    let Specials3 = document.getElementById("specials3")

    OverLay2.onmouseover = ()=> {
      OverLay2.classList.add("rgba-teal-strong-2","overlay-display","animated","fadeInRightBig")
      OverLay2Text1.textContent="DESIGNER"
      OverLay2Text2.textContent="WOMEN"
      OverLay2Text3.textContent="OUTFITS"

      OverLay2Button.textContent="Check It Out"

      SpecialsHeader.textContent="AUTMEN SPECIALES"
      Specials1.textContent="HATS"
      Specials2.textContent="BOOTS"
      Specials3.textContent="SOCKS"


    }
  }

}
