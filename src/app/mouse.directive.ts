import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(private r:Renderer2,private e:ElementRef) { }
@HostListener ('click') do()
{
alert('display');
}
@HostListener ('mouseover') doit()
{
this.r.setStyle(this.e.nativeElement,'background-color','green');
}
}
