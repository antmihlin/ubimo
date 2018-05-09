import { Injectable } from '@angular/core';

import { AdDispatcher } from 'ubimo-fed-ha-master';

@Injectable()
export class UbimoAdDispatcherService {

  constructor(
	private _adDispatcher:AdDispatcher
  ) { }

	public dispatchAd(){
		return this._adDispatcher.adDispatcher$;
	}

}
