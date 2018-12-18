import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimaryButtonHover]'
})
export class PrimaryButtonHoverDirective {

  constructor(private renderer: Renderer, private el: ElementRef) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', 'white');      
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  hover(onHoverRed: boolean) {
    if (onHoverRed) {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', '#007bff');
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', '#fff');

    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'white');   
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', '#007bff'); 
    }
  }

}
