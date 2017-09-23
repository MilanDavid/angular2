import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open') openClass = false;

  @HostListener('click') toggleOpen() {
    this.openClass = !this.openClass;
  }

}
