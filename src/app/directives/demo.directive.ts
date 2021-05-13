import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private myElement: ElementRef) {
  }

  @Input() appDemo: any;

  @HostListener("mouseover") onMouseOver(){
    this.tomashi(this.appDemo);

  }

  @HostListener("mouseout") onMouseOut(){
    this.tomashi("");

  }

  private tomashi(sam: string){
    this.myElement.nativeElement.style.backgroundColor = sam;

  }

}
