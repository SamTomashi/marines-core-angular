import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // myElement!: ElementRef;

  constructor(private myElement: ElementRef) { 
    myElement.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }
  
  @Input() appHighlight!: string; 

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
  }
  
  private highlight(color: string) {
    this.myElement.nativeElement.style.backgroundColor = color;
  }

}
