import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/components/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isUser: boolean = false

  userInfo: User []
  userObservbal: Subscription

  constructor(private as:AuthService, private us:UserService) {

   }

  ngOnInit() {

    // this.userObservbal = this.us.getUserInfo().subscribe(userInfo => {
    //   this.userInfo = userInfo.payload(User => {
    //     return {
    //       id: User.payload.doc.id,
    //       ...User.payload.doc.data() as {}
    //     }
    //   })
    // })

    this.as.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.as.userId = user.uid
      }
      else{
        this.isUser = false;
        this.as.userId = ''

      }
    })
  }

  logOut(){
    this.as.logout().then(()=> console.log('out'))
  }
}
