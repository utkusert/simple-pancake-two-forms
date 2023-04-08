import { Component, OnInit, ViewChild } from '@angular/core';
import { CvaInputComponent } from './cva-input/cva-input.component';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ResponseModel } from 'src/app/models/response-model';
import { postRequest } from 'src/app/store/action-store';
import { AppState } from 'src/app/store/app-state-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
<<<<<<< Updated upstream

  @ViewChild(CvaInputComponent) cvaInputComponent!: CvaInputComponent;
=======
  form = new FormGroup({
    formArray: new FormControl('')
  });
>>>>>>> Stashed changes

  bothPureAndPalindromeSub: ResponseModel[] = [];
  onlyPalindromeSub: ResponseModel[] = [];
  notPalindromeSub: ResponseModel[] = [];
  private subscription: Subscription[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.subscription = this.getSubscriptions();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())
  }

  sendForm() {
    console.log(this.cvaInputComponent.form.value);
    const payload: { content: string[] } = { content: this.cvaInputComponent.form.value.formArray?.content as string[] };
    this.store.dispatch(postRequest({ payload }));
  }

  private getSubscriptions(): Subscription[] {
    return [
      this.store.select(state => state.post.bothPureAndPalindrome).subscribe(data => {
        this.bothPureAndPalindromeSub = data;
      }),
      this.store.select(state => state.post.onlyPalindrome).subscribe(data => {
        this.onlyPalindromeSub = data;
      }),
      this.store.select(state => state.post.notPalindrome).subscribe(data => {
        this.notPalindromeSub = data;
      })
    ];
  }

<<<<<<< Updated upstream
=======
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())
  }

  sendForm() {
    console.log(this.form.value.formArray)
    const payload: { content: string[] } = {
      content: Array.isArray(this.form.value.formArray)
        ? this.form.value.formArray
        : this.form.value.formArray ? [this.form.value.formArray] : []
    };
    this.store.dispatch(postRequest({ payload }));
    this.subscription = this.getSubscriptions();
  }
>>>>>>> Stashed changes
}
