
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { MatTabsModule } from '@angular/material/tabs';
import { NgwWowModule } from 'ngx-wow';

//views
import { HomeComponent } from './views/navbar/home/home.component';
import { AccountComponent } from './views/navbar/account/account.component';
import { OrdersComponent } from './views/navbar//orders/orders.component';
import { GoodsComponent } from './views/navbar/goods/goods.component';
import { CartComponent } from './views/navbar/cart/cart.component';

//components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';

//pages
import { NotFoundComponent } from './views/pages/not-found/not-found.component';
import { LoginComponent } from './views/pages/login/login.component';
import { SignupComponent } from './views/pages/signup/signup.component';
import { WeddingsComponent } from './views/pages/weddings/weddings.component';
import { LeatherComponent } from './views/pages/leather/leather.component';
import { AccessoriesComponent } from './views/pages/accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent,
    OrdersComponent,
    GoodsComponent,
    NavBarComponent,
    SliderComponent,
    CartComponent,
    NotFoundComponent,
    CarouselComponent,
    CategoriesComponent,
    WeddingsComponent,
    LeatherComponent,
    AccessoriesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyDIIRhsXrXlUTq87gvwYi1AOJG5LaPB5tM",
        authDomain: "ang-e-commerce.firebaseapp.com",
        databaseURL: "https://ang-e-commerce.firebaseio.com",
        projectId: "ang-e-commerce",
        storageBucket: "ang-e-commerce.appspot.com",
        messagingSenderId: "224253080230",
        appId: "1:224253080230:web:ba1d22fd3945563ec3ba67",
        measurementId: "G-2Q9M7RKVMX"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatTabsModule,
    NgwWowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
