import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "in28"
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Dependency(Router) Injection
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username);
    if(this.username==="in28" && this.password==='dummy') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true;
    }
  }
}