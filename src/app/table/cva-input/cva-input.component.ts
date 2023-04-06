import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

interface cvaInputValue {
  content: string[];
}

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

  form = new FormGroup({
    formArray: new FormControl({
      content: ["racecar"] as string[]
    })
  });

  valueInput: cvaInputValue = { content: [] };
  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: any) {
    if (value !== undefined) {
      this.valueInput.content = value.content;
      this.form.patchValue({ formArray: { content: this.valueInput.content } });
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;

  }
}
