import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appByEg]'
})
export class ByEgDirective {

    @HostListener('mouseover') mouseover(){
      this.elem.nativeElement.value*50
    }
  constructor(private elem:ElementRef){
        this.elem.nativeElement.style.border="1px solid black"
   }

}
