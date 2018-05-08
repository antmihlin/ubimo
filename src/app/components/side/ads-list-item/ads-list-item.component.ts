import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'li[app-ads-list-item]',
  templateUrl: './ads-list-item.component.html',
  styleUrls: ['./ads-list-item.component.scss']
})
export class AdsListItemComponent implements OnInit {
	@Input('ad')ad;
	constructor() { }

	ngOnInit() {
	}

}
