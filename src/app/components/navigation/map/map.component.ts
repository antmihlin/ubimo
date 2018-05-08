import { Component, OnInit } from '@angular/core';

import { UbimoAdDispatcherService } from '../../../services/ubimo-ad-dispatcher.service';
import { AdsExchangeService } from '../../../services/ads-exchange.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	public advertisement;
	
	public adsList:Array<any> = [];

	constructor(
	  private _adDispatcher:UbimoAdDispatcherService,
	  private _adExchange:AdsExchangeService
	) { }

	ngOnInit() {
		this.getAd();
		this._adExchange.currentAdsList.subscribe(data=>{
			this.adsList = data;
		});
	}

	//Start ads streaming
	public getAd(){
		this._adDispatcher.dispatchAd().subscribe( data=>{
			this.advertisement = data;
			this.advertisement.time = Date.now();
			
			this.adsList.push(this.advertisement);
			this.changeAdsList();
		} );
	}
	
	//Send updated list to the sidebar
	public changeAdsList(){
		this._adExchange.changeAdsList(this.adsList);
	}

}
