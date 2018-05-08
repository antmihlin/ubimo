import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AdsExchangeService {

  private adsList = new BehaviorSubject<Array<any>>([]);
  currentAdsList = this.adsList.asObservable();

  constructor() { }

  changeAdsList(list: Array<any>) {
    this.adsList.next(list)
  }

}