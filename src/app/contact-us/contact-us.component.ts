import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("initializing contact us component")
   }
 
   ngOnDestroy(){
     console.log("destroying contact us component")
 
   }

}
