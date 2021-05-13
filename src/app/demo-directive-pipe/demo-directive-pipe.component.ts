import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive-pipe',
  templateUrl: './demo-directive-pipe.component.html',
  styleUrls: ['./demo-directive-pipe.component.css']
})
export class DemoDirectivePipeComponent implements OnInit {

  constructor() { }

  color!: string;

  ngOnInit(): void {
  }

  onLoseFocus(event: any){
    this.color = event.target.value;
  }

}
