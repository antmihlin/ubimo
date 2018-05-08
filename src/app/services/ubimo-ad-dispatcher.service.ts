import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/delay';

@Injectable()
export class UbimoAdDispatcherService {

  constructor(
	private _adDispatcher:AdDispatcher
  ) { }

	public dispatchAd(){
		return this._adDispatcher.adDispatcher$;
	}

}

export interface ICreative {
    name: string;
    url: string;
}
export interface IAdEvent {
    type: 'IMAGE' | 'VIDEO';
    coordinate: {
        x: number;
        y: number;
    };
    creative: ICreative;
}
export declare class AdDispatcher {
    private _adDispatcher$;
    private imagesCreatives;
    private videoCreatives;
    constructor();
    private getRandomAd();
    private startEmissions();
    readonly adDispatcher$: Observable<IAdEvent>;
    registerToAdEvents(cb: (adEvent: IAdEvent) => void): {
        removeListener: () => void;
    };
}
export declare const adDispatcher: AdDispatcher;
