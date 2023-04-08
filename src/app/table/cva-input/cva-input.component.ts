import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cva-input',
  templateUrl: './cva-input.component.html',
  styleUrls: ['./cva-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CvaInputComponent),
      multi: true
    }
  ]
})
export class CvaInputComponent implements ControlValueAccessor {

  constructor() { }

  onChange: any = () => { }
  onTouch: any = () => { }
  val: string = ""

  set value(val: string) {
    if (val !== undefined && this.val !== val) {
      this.val = val
      this.onChange(val)
      this.onTouch(val)
    }
  }
  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }
}
