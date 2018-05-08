import { Injectable } from '@angular/core';

import {AdDispatcher} from './ad-dispatcher';

@Injectable()
export class UbimoAdDispatcherService {

  constructor(
	private _adDispatcher:AdDispatcher
  ) { }

	public dispatchAd(){
		return this._adDispatcher.adDispatcher$;
	}

}
