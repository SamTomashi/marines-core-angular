import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user: string = "";

  username!: any;

  enabled = true;
  inputType = "password";
  val: string = "Sam Tomashi"

  color!:string ;


  constructor() { }

  ngOnInit(): void {
   console.log("initializing login component")
  }

  ngOnDestroy(){
    console.log("destroying login component")

  }

  getUsername(event: any){
    this.enabled = false;
    console.log(this.username);
  }
  

  enableOrDisable(){
    this.enabled = !this.enabled
  }

  isChecked = true;
  showPassword(){
    // this.inputType = "text";
   this.isChecked = !this.isChecked;
   console.log("Sam");
  }

  looseFocus(event: any){
    this.color = event.target.value;
  }

}
