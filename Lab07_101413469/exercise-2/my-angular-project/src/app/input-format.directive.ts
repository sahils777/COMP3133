import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const inputValue = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue.toUpperCase();
  }
}
