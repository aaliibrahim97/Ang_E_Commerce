import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['.navbarcustom { display:none !important; }'],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string = ''

  constructor(private as: AuthService, private router:Router) { }

  ngOnInit() {

  }

  login(form){
    let data = form.value
    this.as.login(data.email, data.password)
    .then(()=> alert("logged in successfly"))
    .then(()=> this.router.navigate(['/']))
    .then(result => console.log(result))
    .catch(err => {
      this.errorMessage = err.message
    })  }
}
