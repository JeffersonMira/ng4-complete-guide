import {Directive, HostListener, HostBinding} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
//To use it, I must include it on the app.module.ts, in the @NgModule list
export class DropdownDirective{

  //This guy attachs this value to some value of the element affected. In this case, the 'open' class.
  @HostBinding('class.open') isOpen = false;

  //This directive will lesten to a 'click' event. So it will do something when it happens.
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
