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
  values: string[] = []
  newValue: string = ''

  set value(val: string) {
    if (val !== undefined && !this.values.includes(val)) {
      this.values.push(val)
      this.onChange(this.values)
      this.onTouch(this.values)
    }
  }

  removeValue(val: string) {
    const index = this.values.indexOf(val)
    if (index !== -1) {
      this.values.splice(index, 1)
      this.onChange(this.values)
      this.onTouch(this.values)
    }
  }

  addValue() {
    if (this.newValue.trim() !== '') {
      this.value = this.newValue.trim()
      this.newValue = ''
    }
  }

  writeValue(values: any) {
    if (values && Array.isArray(values)) {
      this.values = values
    } else {
      this.values = []
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }
}

