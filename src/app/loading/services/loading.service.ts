import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  state$ = new BehaviorSubject(false);
  constructor() { }

  activeLoading(state:boolean){
    this.state$.next(state);
  }
  loadingState$(){
    return this.state$.asObservable();
  }
}
