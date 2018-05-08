import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-popup',
  templateUrl: './ad-popup.component.html',
  styleUrls: ['./ad-popup.component.scss']
})
export class AdPopupComponent implements OnInit {

	@Input('ad')advertisement;

	constructor() { }

	ngOnInit() {
	}

}
