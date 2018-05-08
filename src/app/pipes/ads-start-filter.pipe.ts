import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'adsStartFilter',
    pure: false
})
export class AdsStartFilterPipe implements PipeTransform {

	transform(items: any[], start: number): any {
		if(!items || !start )
			return items;
			
		return items.filter(item => item.time > start );
	}

}
