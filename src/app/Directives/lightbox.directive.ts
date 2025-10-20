import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})
export class LightboxDirective {

  @HostListener('mouseover') mouseover(){
    this.elem.nativeElement.style.border="1px solid red"
  }

    @HostListener('mouseout') mouseout(){
    this.elem.nativeElement.style.border="2px solid blue"
  }

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.border="3px solid green"
  }

}
