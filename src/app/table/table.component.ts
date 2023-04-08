import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ResponseModel } from 'src/app/models/response-model';
import { postRequest } from 'src/app/store/action-store';
import { AppState } from 'src/app/store/app-state-model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  form = new FormGroup({
    formArray: new FormControl('')
  });

  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())
  }

  bothPureAndPalindromeSub: ResponseModel[] = [];
  onlyPalindromeSub: ResponseModel[] = [];
  notPalindromeSub: ResponseModel[] = [];
  private subscription: Subscription[] = [];

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
}
