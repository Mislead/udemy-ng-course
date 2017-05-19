import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShown = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleShow(eventData: Event){
    this.isShown = !this.isShown;
  }


}
