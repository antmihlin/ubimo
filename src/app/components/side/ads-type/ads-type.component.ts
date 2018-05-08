import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ads-type',
  templateUrl: './ads-type.component.html',
  styleUrls: ['./ads-type.component.scss']
})
export class AdsTypeComponent implements OnInit {

	@Input('mediaType')mediaType:string;
	
	constructor() { }

	ngOnInit() {
	}

}
