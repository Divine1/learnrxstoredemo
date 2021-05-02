import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../store/counter/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>
 
  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }
 
  ngOnInit(): void {
    console.log("MyCounterComponent:ngOnInit ");
    
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
