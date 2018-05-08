import { Component, OnInit } from '@angular/core';

import { AdsExchangeService } from '../../../services/ads-exchange.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	public startTime:number;
	public endTime:number;
		
	public ads:Array<any>;

	constructor(
		private _adExchange:AdsExchangeService
	) { }

	ngOnInit() {
		this._adExchange.currentAdsList.subscribe(data=>{
			this.ads = data;
		});
	}

}
